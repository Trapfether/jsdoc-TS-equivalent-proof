// ts-check
/**
 * @template {String} Input
 * @typedef {TrimStart<TrimEnd<TrimMiddle<Input>>>} Trim
 */

/**
 * @template {string} Input
 * @typedef {Input extends ` ${infer Content}` ? TrimStart<Content> : Input} TrimStart
 */

/**
 * @template {string} Input
 * @typedef {Input extends `${infer Content} ` ? TrimEnd<Content> : Input} TrimEnd
 */

/**
 * @template {string} Input
 * @typedef {Input extends `${infer Start}  ${infer End}` ? TrimMiddle<`${Start} ${End}`> : Input} TrimMiddle
 */
