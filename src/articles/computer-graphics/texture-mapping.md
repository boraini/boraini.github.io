---
title: Texture Mapping
excerpt: All to know about how to map textures onto a 3D surface
author: boraini
date: 2022-10-01
thumbnail: ./_texture-mapping/snowboarder_original.png
---

<script>
    import UVMappingApplet from "./_texture-mapping/UVMappingApplet.svelte";
</script>

Textures are what make 3D computer graphics beautiful. They allow us to display detailed objects using only a few polygons. This article will focus on how we map a texture image on top of our 3D object, or its individual faces in the case of a mesh.

## UV mapping onto triangular meshes using an UV map

To tell the computer which part of the texture to put on a triangle in the scene, we can use UV mapping. UV mapping is a linear mapping between the local coordinates of the triangle in the scene and a triangle in the texture space. Given a point on the scene triangle, we aim to get the corresponding point in the texture space. This point need not be aligned to any texel.

In OpenGL, this is done by the library along with perspective correction when we specify texture coordinates for the vertices then pass them through in the vertex shader. Then we can access the coordinate in the fragment shader.

For every value u, v > 0; u + v &gt; 1, the points in the texture space triangle and the scene triangle

p0 + u(p1 - p0) + v(p2 - p0)

are mapped to each other.

We usually need to map a point in the scene triangle to the texture space, so we can derive an affine transformation matrix that does this for us.

First we get the u and v coordinates. If we call p1 - p0 = i and p2 - p0 = j, the point on the triangle p, and the final coordinates c:

```math
\begin{pmatrix}
i_x&j_x\\
i_y&j_y\\
i_z&j_z\\
\end{pmatrix}
\begin{pmatrix}
c_u\\
c_v\\
\end{pmatrix}
=
\begin{pmatrix}
p_x\\
p_y\\
p_z\\
\end{pmatrix}
```

A similar equation goes for the texture space but this time in 2D. We will call p1 - p0 = u and p2 - p0 = v:

```math
\begin{pmatrix}
u_x&v_x\\
u_y&v_y\\
\end{pmatrix}
\begin{pmatrix}
c_u\\
c_v\\
\end{pmatrix}
=
\begin{pmatrix}
p_x\\
p_y\\
\end{pmatrix}
```

We still have to invert the matrix in the former equation. We can count on the fact that p is indeed coplanar with the triangle so the least squares method will yield correct results.

```math

\begin{pmatrix}
c_u\\
c_v\\
\end{pmatrix}
=
\begin{pmatrix}
\begin{pmatrix}
i_x&i_y&i_z\\
j_x&j_y&j_z\\
\end{pmatrix}
\begin{pmatrix}
i_x&j_x\\
i_y&j_y\\
i_z&j_z\\
\end{pmatrix}
\end{pmatrix}^{-1}
\begin{pmatrix}
i_x&i_y&i_z\\
j_x&j_y&j_z\\
\end{pmatrix}
\begin{pmatrix}
p_x\\
p_y\\
p_z\\
\end{pmatrix}
```

To get rid of the 2x3 matrix, it can be represented as an 3x3 matrix with the last row all zeroes, and then the resulting zero in the final 3D vector can be dropped.

Here is an applet that demonstrates how this UV mapping behaves. You can drag the corners of both triangles and follow the red and aqua markers to see which points are mapped to each other (if you complete the parallelogram).

<UVMappingApplet />

If you haven't noticed, this mapping won't be correct under perspective if used after the triangles are projected. You need to resort to other mapping calculation if you need perspective. However, the 2D version can still be used if you need orthographic projection such as in 2D animation.

To get perspectively correctly mapped textures, we need to use barycentric coordinates.

```
// p, p0, p1, p2 are given as homogenous coordinates as (x, y, z, 1)
/* the projection matrix is
f/z 0   0   0
0   f/z 0   0
0   0   0   0
0   0   1   0
This is not the same as the OpenGL projection matrix but works for our use case.
*/

def barycentric(p, p0, p1, p2) {
    // triangle areas using edge edge or edge point-vertex cross products
    return  [
        ||(p2 - p1)x(p - p1)||,
        ||(p - p0)x(p2 - p0)||,
        ||(p1 - p0)x(p - p0)||,
    ] / ||(p1 - p0)x(p2 - p0)||
}

p, p0, p1, p2 = project_points(p_3D, p0_3D, p1_3D, p2_3D)

b_ortho = barycentric(p, p0, p1, p2)

// deeper points get less weight
b_perspective_scaled = [b_ortho[0] / p0.w, b_ortho[1] / p1.w, b_ortho[2] / p2.w]

// not vector normalization
b_perspective = b_perspective_scaled / sum_of_components(b_perspective_scaled)
```

Unfortunately, you can't do this in a hardware-accelerated way using JS CanvasRenderingContext2D, therefore I didn't want to make an applet for it. To get perspective-correct UV mapping, the perspective-correct barycentric coordinates are calculated on the scene triangle. Then, they are evaluated in a linear fashion to get to the texture coordinate inside the texture triangle. Getting back to a Cartesian coordinate from a barycentric coordinate in a linear fashion is just p = b0 p0 + b1 p1 + b2 p2. I really can't verify the algorithm I've found from a reliable source, though. The pseudocode for the perspective-based barycentric coordinates is largely based on this: https://stackoverflow.com/a/24460895

## Mapping to texels from some random coordinate

The above method of mapping textures result in real numbers but the texels are not continuous like that. If we get texture coodinates between the centers of pixels (oversampling if many), we need to be able to average some color and return it to prevent our program from crashing. In this article I will explain two types of interpolation for this, bilinear and nearest neighbour.

You should know how linear interpolation is done already.

```math
p = t p_2 + (1 - t) p_1
```

Bilinear interpolation on a quadrilateral is just first linearly interpolating over opposing sides, then linearly interpolating between the resulting points.
```math
\begin{equation}
\begin{split}
p_{v0} &= u p_1 + (1 - u) p_0\\
p_{v1} &= u p_2 + (1 - u) p_3\\
\\
p &= v p_{v1} + (1 - u) p_{v0}\\
\end{split}\nonumber
\end{equation}
```

Where do we get u and v, though? After scaling the UV coordinate to the pixel dimensions of the texture, we choose the initial texel coordinate c0 as the floor of the coordinate. Then u and v become the fractional parts of the UV coordinate components. Also

c1 = c0 + [1, 0], c2 = c0 + [1, 1], c3 = c0 + [0, 1].

Then we get p0, p1, p2, p3 by reading the texture colour values at c0, c1, c2, c3.

For bilinear mapping, the resulting color will be the bilinear mapping between p0, p1, p2, p3.

For nearest neighbour mapping, the resulting color is the colour at which of c0, c1, c2, c3 is the closest to the texture coordinate i. e. the colour at the nearest neighbour.

```js
return {
    [0, 0]: c0,
    [1, 0]: c1,
    [1, 1]: c2,
    [0, 1]: c3,
}[round(u), round(v)]
```

## Mapping textures at a distance - MipMapping

The mapping we see above will look weird if the object we are viewing is at a distance and there is a lot of distance between sampled points (undersampling) in texture space. We would like to implement on a smaller texture in this case so the distance is less.

The way we produce these smaller textures is by scaling down the image by 2 at each step, using a 2x2 box filter to get the color of each pixel in the next texture. We repeat this until arriving at a 1x1 texture. Then we use the mipmap level that is closest to the pixel size of the triangle on the screen. Actually, we could use the two mipmaps that are around the pixel size, and average between the points that we have found. That method is called trilinear filtering.

The memory cost of mipmapping is derived as follows:

```math
\begin{equation}
\begin{split}
\displaystyle\sum_{i=0}^{\log_2(\textup{size})} 2^{2i}
    &= \frac{1 - 4^{\log_2(\textup{size})}}{1 - 4}\\
    &= \frac{\textup{size}^2 - 1}{3}\\
    \\
\frac{size^2 - 1}{3} + \textup{size}^2 &\leq \frac{4}{3}\textup{size}^2
\end{split}
\end{equation}\nonumber
```