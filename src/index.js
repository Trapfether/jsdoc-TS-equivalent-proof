// ts-check

/** @type {SingleWordOutput} */
const SlayerTitle = "";
/** @type {LargeTitleOutput} */
const PinkFloydTitle = "";
/** @type {LeadingArticleOutput} */
const StephenHawkingTitle = "";
/** @type {LeadingConjunctionOutput} */
const EricBogleTitle = "";
/** @type {LeadingPrepositionOutput} */
const RedHotChiliPeppersTitle = "";

// Expect to title-case single words
/**
 * @typedef {"doom"} SingleWordInput
 * @typedef {"Doom"} SingleWordExpectation
 * @typedef {Titlecase<Trim<SingleWordInput>>} SingleWordOutput
 */

/**
 * @typedef {[AssertFalse<Equal<SingleWordInput, SingleWordOutput>>,
 * AssertTrue<Equal<SingleWordExpectation, SingleWordOutput>>]} SingleWordTests
 */

// Expect conjunctions / prepositions / articles to remain lower-case in title
/**
 * @typedef {"DOOM AND GLOOM"} LowerCaseInput
 * @typedef {"Doom and Gloom"} LowerCaseExpectation
 * @typedef {Titlecase<Trim<LowerCaseInput>>} LowerCaseOutput
 */

/**
 * @typedef {[AssertFalse<Equal<LowerCaseInput, LowerCaseOutput>>,
 * AssertTrue<Equal<LowerCaseExpectation, LowerCaseOutput>>]} LowerCaseTests
 */

// Expect to title-case large titles
/**
 * @typedef {"  SeVERAL  SPECies of  sMALL FuRRy  aNIMAls   GathEREd TogETHer iN a caVe aND  GrOOving with a PICt  "} LargeTitleInput
 * @typedef {"Several Species of Small Furry Animals Gathered Together in a Cave and Grooving with a Pict"} LargeTitleExpectation
 * @typedef {Titlecase<Trim<LargeTitleInput>>} LargeTitleOutput
 */

/**
 * @typedef {[AssertFalse<Equal<LargeTitleInput, LargeTitleOutput>>,
 * AssertTrue<Equal<LargeTitleExpectation, LargeTitleOutput>>]} LargeTitleTests
 */

// Expect to title-case composed titles
/**
 * @typedef {"   wORdS "} ComposedSubject
 * @typedef {"  ABOUt    "} ComposedPreposition
 * @typedef {"  BIrDs        "} ComposedObject
 *
 * @typedef {`${ComposedSubject} ${ComposedPreposition} ${ComposedObject}`} ComposedInput
 * @typedef {"Words about Birds"} ComposedExpectation
 * @typedef {Titlecase<Trim<ComposedInput>>} ComposedOutput
 */

/**
 * @typedef {[AssertFalse<Equal<ComposedInput, ComposedOutput>>,
 * AssertTrue<Equal<ComposedExpectation, ComposedOutput>>]} CompositionTests
 */

// Expect to uppercase articles / conjunctions / prepositions as the first word of a title
/**
 * @typedef {"and the band played waltzing matilda"} LeadingConjunctionInput
 * @typedef {"And the Band Played Waltzing Matilda"} LeadingConjunctionExpectation
 * @typedef {Titlecase<Trim<LeadingConjunctionInput>>} LeadingConjunctionOutput
 *
 * @typedef {"a brief history of time"} LeadingArticleInput
 * @typedef {"A Brief History of Time"} LeadingArticleExpectation
 * @typedef {Titlecase<Trim<LeadingArticleInput>>} LeadingArticleOutput
 *
 * @typedef {"under the bridge"} LeadingPrepositionInput
 * @typedef {"Under the Bridge"} LeadingPrepositionExpectation
 * @typedef {Titlecase<Trim<LeadingPrepositionInput>>} LeadingPrepositionOutput
 */

/**
 * @typedef {[AssertFalse<Equal<LeadingConjunctionInput, LeadingConjunctionOutput>>,
 * AssertTrue<Equal<LeadingConjunctionExpectation, LeadingConjunctionOutput>>,
 * AssertFalse<Equal<LeadingArticleInput, LeadingArticleOutput>>,
 * AssertTrue<Equal<LeadingArticleExpectation, LeadingArticleOutput>>,
 * AssertFalse<Equal<LeadingPrepositionInput, LeadingPrepositionOutput>>,
 * AssertTrue<Equal<LeadingPrepositionExpectation, LeadingPrepositionOutput>>]} LeadingTests
 */
