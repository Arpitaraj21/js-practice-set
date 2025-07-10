/**
 * Write a function stringToNumber that takes a string input
 *  and tries to convert it to a number. If the conversion 
 * fails, return "Not a number"
 */

function stringToNumber(input) {
    let value = Number(input);
    if (isNaN(value)) {
        return `Not a number`
    }
    return value
}

console.log(stringToNumber("abd"));


/**
 * Task 2:
Write a function flipBoolean that takes any input and converts
 it to its boolean equivalent, then flips it. For example,
  true becomes false, 0 becomes true, etc.
 */

  function flipBoolean(input){
    let boolValue = Boolean(input);
    return (!boolValue)
  }

  console.log(flipBoolean(0))

  /**
   * Task 3:

Write a function whatAmI that takes an input and returns a
 string describing its type after conversion. If it's a 
 number, return "I'm a number!", if it's a string, return 
 "I'm a string!"
   */


 function whatAmI(input) {
    let value = input;
    if(typeof value === "number"){
        return "I'm a number!"
    }
    if(typeof value === "string"){
        return "I'm a string!"
    }
    return value
 }

 console.log(whatAmI(34))