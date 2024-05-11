/*!
 * isobject-ts <https://github.com/TomHeinemeyer/isobject-ts>
 *
 * Copyright (c) 2024, Tom Heinemeyer.
 * Released under the MIT License.
 */

export default function isObject(
  value: unknown
): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}