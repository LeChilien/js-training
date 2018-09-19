'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase (str){
  return str.split(" ").map(function(mot) {
    return mot.charAt(0).toUpperCase() + mot.slice(1).toLowerCase();
  }).join(" ");
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('You must write your own tests'),'You Must Write Your Own Tests')

// End of tests */
