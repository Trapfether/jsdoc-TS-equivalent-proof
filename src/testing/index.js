/**
 * @template {true} T
 * @typedef {T} AssertTrue
 */

/**
 * @template {false} F
 * @typedef {F} AssertFalse
 */

/**
 * @template Expected
 * @template Input
 * @typedef {Input extends Expected ? (Expected extends Input ? true : false) : false} Equal
 */