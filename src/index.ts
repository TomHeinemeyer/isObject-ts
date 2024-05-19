/*!
 * isobject-ts <https://github.com/TomHeinemeyer/isobject-ts>
 *
 * Copyright (c) 2024, Tom Heinemeyer.
 * Released under the MIT License.
 */

/**
 * @param {unknown} value The value to be checked.
 * @returns {boolean} True, if the value is an object that can be keyed into, false otherwise.
 *
 * @example
 * // logs true
 * console.debug(isObject({key: value}))
 *
 * @example
 * // logs false
 * console.debug(isObject(null))
 */
export default function isObject(
  value: unknown
): value is Record<string | number | symbol, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}
