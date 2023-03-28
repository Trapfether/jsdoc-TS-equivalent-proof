// ts-check
/**
 * @template {String} Input
 * @typedef {Input extends `${infer First} ${infer Rest}`
* ? `${CapitalizeWord<First>} ${TitlecaseRemainingWords<Rest>}`
* : CapitalizeWord<Input>} Titlecase
*/

/**
* @template {String} Input
* @typedef {Input extends `${infer First} ${infer Rest}`
* ? `${CapitalizeNonPreposition<First>} ${TitlecaseRemainingWords<Rest>}`
* : CapitalizeWord<Input>} TitlecaseRemainingWords
*/

/**
* @template {String} Word
* @typedef {LowercaseWord<Word> extends LowercaseInTitle
* ? LowercaseWord<Word>
* : CapitalizeWord<Word>} CapitalizeNonPreposition
*/

/**
* @typedef {Preposition | Article | Conjunction} LowercaseInTitle
*/
