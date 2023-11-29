---
title: Linear and Affine Transformations
excerpt: Cheatsheet about affine transformation matrices
author: boraini
date: 2022-08-30
thumbnail: ./linear-and-affine-transformations.png
---

When we talk about math in computer graphics, of course matrix transformations constitute a very important part of it. In the end, you should convert these triangles to some 2D projection to be able to rasterise them in OpenGL.

The low-level transformations we do in OpenGL using matrices nicely map to transformations we have studied during the Linear Algebra course. We have rotation, shearing, and scaling which work the same. However, we also need translation, which is very simple to define but actually forbidden in linear transformations. Therefore, we can look at affine transformations, which allow that.

## Affine transformations using matrices

An affine transformation of a vector within a simple dimension (i. e. without projection) is a linear transformation output plus some constant vector, which is the amount of translation _after_ all other transformations performed.

```math
\textit{\textbf{Av} \textup{+} \textbf{t} = \textbf{v’}}
```

and the corresponding inverse transformation would be

```math
\textit{\textbf{A}}^{-1} \textit{(\textbf{v’} - \textbf{t}) = \textbf{v}}
```

Implementing this like this everywhere would produce ugly code and would’t be so performant compared to pure linear transformations.

Computer graphics gods had a very simple solution to this. They would just have one more dimension in the vector than the dimension of the space in context, to store an arbitrary constant to be employed in some clever math.


In the case of 3D affine transformations, the fourth component of the vec4 is kept at 1.

```glsl
vec4 vertex = vec4(x, y, z, 1.0);
```

Now let’s look at how we can have a translation (transformation with only nonzero translation) matrix.

```math
\begin{gather}
\textnormal{(for v having the fourth component as 1)}\nonumber\\
\begin{pmatrix}
1&0&0&2\\
0&1&0&3\\
0&0&1&4\\
0&0&0&1\\
\end{pmatrix}
\textit{\textbf{v = v \textup{+} }}
\begin{pmatrix}
2\\
3\\
4\\
0\\
\end{pmatrix}\nonumber
\end{gather}
```

In general, translation of a 3D vector v translated by [x y z]^T is given by.

```math
\begin{pmatrix}
1&0&0&\Delta x\\
0&1&0&\Delta y\\
0&0&1&\Delta z\\
0&0&0&1\\
\end{pmatrix}
\textit{\textbf{v = v \textup{+} }}
\begin{pmatrix}
\Delta x\\
\Delta y\\
\Delta z\\
0\\
\end{pmatrix}
```


Combining this with other types of transformations is also dead simple. You just need to replace the components m11 - m33 with the linear transformation matrix values which transform the vector _before_ a final translation. If you want to find the transformation matrix with the translation applied before some transformations, you need to find the transformation matrices of each step separately and multiply them, first step to the RHS.

These don’t go beyond the LA course but the other 4x4 3D transformation matrices would be:

## Linear scaling

```math
\begin{pmatrix}
s_x&0&0&0\\
0&s_y&0&0\\
0&0&s_z&0\\
0&0&0&1\\
\end{pmatrix}
```

## Linear right-handed rotations

Add the identity matrix column and row to the following 2D matrix at the index of the rotation axis:

```math
\begin{pmatrix}
\cos \theta&-\sin \theta\\
\sin \theta&\cos \theta\\
\end{pmatrix}
```

Which gives

Rotation around +x
```math
\begin{pmatrix}
1&0&0&0\\
0&\cos \theta&-\sin \theta&0\\
0&\sin \theta&\cos \theta&0\\
0&0&0&1\\
\end{pmatrix}
```
Rotation around +y
```math
\begin{pmatrix}
\cos \theta&0&\sin \theta&0\\
0&1&0&0\\
-\sin \theta&0&\cos \theta&0\\
0&0&0&1\\
\end{pmatrix}
```
Rotation around +z
```math
\begin{pmatrix}
\cos \theta&-\sin \theta&0&0\\
\sin \theta&\cos \theta&0&0\\
0&0&1&0\\
0&0&0&1\\
\end{pmatrix}
```
Notice that all these matrices are orthogonal.
