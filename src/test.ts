import isObject from "./index"

describe("isObject", () => {
  it("empty object is an object", () => {
    expect(isObject({})).toBe(true)
  })
  it("array is not an object", () => {
    expect(isObject([])).toBe(false)
  })
  it("null is not an object", () => {
    expect(isObject(null)).toBe(false)
  })
  it("a function is not an object", () => {
    expect(isObject(() => {})).toBe(false)
  })
  it("a number is not an object", () => {
    expect(isObject(1)).toBe(false)
  })
  it("undefined is not an object", () => {
    expect(isObject(undefined)).toBe(false)
  })
  it("an empty object is an object", () => {
    expect(isObject({})).toBe(true)
  })
  it("an object created from Object.create with an empty object is an object", () => {
    expect(isObject(Object.create({}))).toBe(true)
  })
  it("an object created from Object.create with the object prototype is an object", () => {
    expect(isObject(Object.create(Object.prototype))).toBe(true)
  })
  it("an object created from Object.create with null is an object", () => {
    expect(isObject(Object.create(null))).toBe(true)
  })
  it("an object instatiated with the new keyword is an object", () => {
    expect(isObject(new Error())).toBe(true)
  })
  it("a regular expression is an object", () => {
    expect(isObject(/foo/)).toBe(true)
  })
})
