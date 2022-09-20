---
title: Simulating Physical Reflections
author: boraini
date: 2022-09-08
excerpt: How rays are reflected in 3D ray tracing and how different mainstream reflection models work
---

In our high school physics classes we learn that when a light beam shines on a surface, the angle of the reflected beam to the normal vector is the same with the incoming beam's. This can allow us to make mirror surfaces in computer graphics but that is not all of it if we want relatively realistic reflections. Not only that there are different components of a reflection, but also every material acts differently in how they reflect. In this article we will explore how computer scientists have tackled this problem with implementation.

