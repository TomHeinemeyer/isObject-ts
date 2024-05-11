# isobject-ts [![NPM version](https://img.shields.io/npm/v/isobject-ts.svg?style=flat)](https://www.npmjs.com/package/isobject-ts) [![NPM monthly downloads](https://img.shields.io/npm/dm/isobject-ts.svg?style=flat)](https://npmjs.org/package/isobject-ts) [![NPM total downloads](https://img.shields.io/npm/dt/isobject-ts.svg?style=flat)](https://npmjs.org/package/isobject-ts)

> Uses a type guard to return if a value is an actual object. The resulting type is `Record<string, unknown>`.

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

**False**

All of the following return `false`:

```js
isObject(function () {})
isObject(1)
isObject([])
isObject(undefined)
isObject(null)
```

### Author

**Tom Heinemeyer**

- [GitHub Profile](https://github.com/TomHeinemeyer)

### License

Copyright © 2019, [Tom Heinemeyer](https://github.com/TomHeinemeyer).
Released under the [MIT License](LICENSE).
