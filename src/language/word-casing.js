// ts-check
/**
 * @template {String} Word
 * @typedef {Word extends `${infer First}${infer Rest}`
* ? `${UppercaseLetter<First>}${LowercaseWord<Rest>}`
* : Word} CapitalizeWord
*/

/**
* @template {String} Word
* @typedef {Word extends `${infer First}${infer Rest}`
* ? `${LowercaseLetter<First>}${LowercaseWord<Rest>}`
* : Word} LowercaseWord
*/

/**
* @template {String} X
* @typedef {SubstituteCase<LowercaseMap, X>} LowercaseLetter
*/

/**
* @template {String} X
* @typedef {SubstituteCase<UppercaseMap, X>} UppercaseLetter
*/

/**
* @template {{[x:String]: String}} Mapper - Must be a map
* @template {String} Letter
* @typedef {Letter extends keyof Mapper ? Mapper[Letter] : Letter} SubstituteCase
*/

/**
* @typedef {{a: "A"; b: "B"; c: "C"; d: "D";
* e: "E"; f: "F"; g: "G"; h: "H";
* i: "I"; j: "J"; k: "K"; l: "L";
* m: "M"; n: "N"; o: "O"; p: "P";
* q: "Q"; r: "R"; s: "S"; t: "T";
* u: "U"; v: "V"; w: "W"; x: "X";
* y: "Y"; z: "Z";}} UppercaseMap
*/

/**
* @typedef {{A: "a"; B: "b"; C: "c"; D: "d";
* E: "e"; F: "f"; G: "g"; H: "h";
* I: "i"; J: "j"; K: "k"; L: "l";
* M: "m"; N: "n"; O: "o"; P: "p";
* Q: "q"; R: "r"; S: "s"; T: "t";
* U: "u"; V: "v"; W: "w"; X: "x";
* Y: "y"; Z: "z";}} LowercaseMap
*/
