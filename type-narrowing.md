# Type Narrowing in TypeScript with typeof, in and instanceof

## Introduction

Union types are very useful, but they come with a problem. If a value is ( string | number ), TypeScript won't tell me call toUpperCase() on it, because the value can be a number. Type narrowing is how we tell TypeScript which type we actually can have at that moment. In this post I will show three common ways to narrow: typeof, in and instanceof.

## Body

typeof works for primitive types like string, number and boolean:

```ts
const print = (value: string | number) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value;
}
```

Inside the if block, TypeScript knows the value is a string, so toUpperCase() is allowed here. After the block, it also knows only number is left.

in checks if a property exists on an object. It's useful when two object types have different properties:

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

const move = (animal: Fish | Bird) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
}
```

instanceof checks if a value was created from a class, like Date:

```ts
const showDate = (x: Date | string) => {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        return;
    }
    console.log(new Date(x).toUTCString());
}
```

One thing to be careful about: typeof null is "object", so checking typeof x === "object" alone is not enough when null is possible.

## Conclusion

Narrowing lets us keep the flexible union types and still write a safe code. Instead of using any and hoping for the best, we check the type of first and TypeScript helps us with the rest.
