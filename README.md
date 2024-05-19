# isobject-ts [![NPM version](https://img.shields.io/npm/v/isobject-ts.svg?style=flat)](https://www.npmjs.com/package/isobject-ts) [![NPM monthly downloads](https://img.shields.io/npm/dm/isobject-ts.svg?style=flat)](https://npmjs.org/package/isobject-ts) [![NPM total downloads](https://img.shields.io/npm/dt/isobject-ts.svg?style=flat)](https://npmjs.org/package/isobject-ts)

> Return `true`, if a given value is an object. Uses a type predicate for Typescript users to return additional type information. The type returned is `Record<string | number | symbol, unknown>`.

## Install

Install using [npm](https://www.npmjs.com/):

```sh
$ npm install --save isobject-ts
```

## Usage

```ts
import isObject from "isobject-ts"
```

All of the following return `true`:

```js
isObject({})
isObject(Object.create({}))
isObject(Object.create(Object.prototype))
isObject(Object.create(null))
isObject({})
isObject(new Foo())
isObject(/foo/)
```

All of the following return `false`:

```js
isObject(function () {})
isObject(1)
isObject([])
isObject(undefined)
isObject(null)
```

You can use the type information like this:

```js
const foo(bar: unknown) => {
    if(!isObject(bar)) return undefined
    /* Type is now inferred to be Record<string | number | symbol, unknown>, 
       so we can now check for keys we want to access */
    const hasBaz = 'baz' in bar
    if(!hasBaz) return undefined
    // We know that our key "baz" is in the object, so we can safely access it
    return bar.baz
}
```

### Author

**Tom Heinemeyer**

- [GitHub Profile](https://github.com/TomHeinemeyer)

### License

Copyright © 2024, [Tom Heinemeyer](https://github.com/TomHeinemeyer).
Released under the [MIT License](LICENSE).
