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
  it("valid cases", () => {
    expect(isObject({})).toBe(true)
    expect(isObject(Object.create({}))).toBe(true)
    expect(isObject(Object.create(Object.prototype))).toBe(true)
    expect(isObject(Object.create(null))).toBe(true)
    expect(isObject({})).toBe(true)
    expect(isObject(new Error())).toBe(true)
    expect(isObject(/foo/)).toBe(true)
  })
})
