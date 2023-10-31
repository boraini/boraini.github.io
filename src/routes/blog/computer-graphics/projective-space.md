---
title: Projective Space
excerpt: How perspective projective works in computer graphics
author: boraini
date: 2023-01-09
thumbnail: ./_projective-space/frustum.svg
---
> This article was modified on 2023-10-30 in order to have the proper theory about perspective projection matrices. You can find the old version on GitHub as of 2023-10-30 if you look at the File History.

In my article about linear and affine transformations I have talked about how CG people were so clever that they added a (n + 1)th dimension to their position vectors to enable translation. Well, this is still correct, but there is something more this is used for.

If you have looked into perspective before, you know that it makes farther objects shrink when they are perspective projected. This is achieved by dividing each point on the surface by its depth, something foreign to the linear transformations employed in 3D graphics, where every component of vectors are independently transformed.

To be able to do the necessary things using this linear framework, mathematicians have decided to use projective spaces. A projective space is a space of (n - 1) dimensions (a plane in the case of 3D) where a set of n-dimensional points will be mapped onto the same point. This might seem similar to orthographic projection, where you transform the scene into the camera local space and then drop the depth dimension. This article will focus onto the type where points that are multiples of each other map onto the same point.

For the projective space used for perspective, the rule is

```math
P(a\textup{\textbf{v}}) = P(b\textup{\textbf{v}})
```

where P is the projection function, v is an n + 1 dimensional vector and a and b are scalars. v is the representative of the set of vectors that are mapped the same. In OpenGL and usually in other CG frameworks, the representative has the extra component (we will call it w) as 1. This means we divide the transformed vectors by their extra component to get their representative. We can call the representative point the projected point.


We can adjust how the projection works by changing the extra component row of our projection matrix.


Linear transformation:
```math
\begin{pmatrix}
a&b&c&d\\
e&f&g&h\\
i&j&k&l\\
0&0&0&1\\
\end{pmatrix}
```

Vanishing point at the center of projective plane:
```math
\begin{pmatrix}
a&b&c&d\\
e&f&g&h\\
i&j&k&l\\
0&0&y&z\\
\end{pmatrix}
```

Vanishing point somewhere else:
```math
\begin{pmatrix}
a&b&c&d\\
e&f&g&h\\
i&j&k&l\\
w&x&y&z\\
\end{pmatrix}
```

Any useful perspective projection matrix create two singularities:
- all points far away from the origin seem to merge at the vanishing point.
- lines formed by all points projected onto the same representative point seem to emerge out of some focal point.

This corresponds to how pinhole cameras (*camera obscura* boxes) work. The focus is the pinhole and all light on the same line away from the focus shine onto the same point on the screen behind the pinhole. We can derive a projection matrix which will execute this appropriately.


To have a good reference frame while designing our scene and math, we talk about the thing called a frustum. Frustum is defined as a pyramid whose apex is cut off, revealing another face that is parallel to the base. In our case, the pyramid would have its apex at the focal point (or the pinhole) and the base would extend to infinity, forming the view cone. Note that we are exploiting the fact that we only have rays that pass through the pinhole unlike the real-world, so we can as well put the light capturing surface in front of the pinhole to get a right-side-up image.

![Frustum in 2D with the simulated camera obscura box](./_projective-space/frustum.svg)

Frustum in 2D with the simulated camera obscura box.

The near plane is what we have told about above — the cut face of the frustum. The frustum will be mapped onto n normalized coordinates between -1 and 1. If we map the points on the near plane to depth coordinate 1, we map some to -1; the latter points will be on the far plane. Points on the other faces of the frustum will have -1 or 1 as other mapped coordinates. By the way, to get actual projection, we just drop the depth coordinate after finding the representative point.


To derive the projection matrix, let’s start with how w is calculated for a 3D point. Let’s say the near plane is at a distance n and the far plane is at a distance f to the focal point. We would like to divide the x and y coordinates by the depth value which is done by setting the w value to the unprojected z coordinate. We also want z’ (the mapped depth coordinate) to be 1 for the near plane and -1 for the far plane.


- z’ = -1 for points on near
- z’ = 1 for points on far
- w = -z


First, the equation for w is -z. The negative sign is there because z is negative for points in front of the camera.


We would like z' to be inversely proportional to the z value. This will allow us to do screen-space operations with the perspectively scaled z coordinate, so, for example, we can have greater parallax difference in screen space for object pairs closer to the camera.

Let's set up an equation z' = A/z + b.

For the near and far planes, this becomes the following. Note that n and f are positive while their plane z coordinates would be negative if they are in front of the camera.
```math
\begin{split}
-1 = A/(-n) + B\\
1 = A/(-f) + B
\end{split}
```

If we add them together and apply some algebra:

```math
B = -\frac{A(n+f)}{-2nf}
```

Then, we plug this in into the near plane equation as B.

```math
\begin{split}
-1 &= \frac{A}{-n} + -\frac{A(n+f)}{-2nf}\\
-1 &= \frac{A(2f-n-f)}{-2nf}\\
2nf &= A(f-n)\\
A &= \frac{2nf}{f-n}
\end{split}
```

Then we can plug it into the equation for B in order to get A.

```math
\begin{split}
B &= -\frac{2nf(f+n)}{-2nf(f-n)}\\
B &= \frac{f+n}{f-n}
\end{split}
```

Now, this might scare us since it is not a linear equation i. e. we can't put it into the projection matrix and expect it to work.
However, we should not forget to scale everything up by w = -z, which is necessary since the graphics pipeline will divide every coordinate by w.

```math
\begin{split}
z'&= \frac{2nf}{(f-n)z} + \frac{f+n}{f-n}\\
wz' &= \frac{2nf(-z)}{(f-n)z} + \frac{-z(f+n)}{f-n}\\
wz' &= -\frac{2nf}{f-n} + -\frac{z(f+n)}{f-n}\\
\end{split}
```

And the other coordinates are given as below. The aspect ratio is the screen width divided by screen height.
The camera that we are simulating will always have the image sensor shaped like a square, and the pipeline will stretch the projected 
objects horizontally in order to cover the screen. We could also instead scale down in the vertical direction but let's choose to do it the former way. We fit the vertical coordinates one to one to the screen in that case. We still have to divide instead of multiplying since aspect ratio is scaling of the horizontal compared to the vertical, not the other way.
```math
\begin{split}
wx' &= x\\
wy' &= \frac{y}{\textup{aspect ratio}}
\end{split}
```

Oh hey, we have got the OpenGL perspective projection matrix! This time it should be correct, if you have read the old version of this article.

```math
\begin{pmatrix}
1&0&0&0\\
0&\frac{1}{\textup{aspect ratio}}&0&0\\
0&0&-\frac{f+n}{f-n}&-\frac{2nf}{f-n}\\
0&0&-1&0\\
\end{pmatrix}
```

