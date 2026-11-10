# Type vs Interface in TypeScript: Which One Should I Use?

## Introduction

When I started learning TypeScript, I saw both type and interface can be describe the shape of an object. So my first question was, why do we need two things for the same job where we can do with one? After using both in practice, I found they are similar but not the same. In this post, I will explain the main differences and when we have use ones.

## Body

Both of them can describe as an object:

```ts
type id = number;

interface User {
    name: string;
    id: id;
    role: "admin" | "member";
}
```

An interface can be extend to another interface with the extends keyword, which feels natural when one shape builds on another:

```ts
interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}
```

A type can do something similar with & (intersection), but the syntax is different.

## Conclusion

My simple rule is: I use interface for object shapes and classes, especially when something can be extended later. I uses type for unions, literal types, and short aliases like id. Both work well in this case, so the most important thing is to stay consistent in your project.
