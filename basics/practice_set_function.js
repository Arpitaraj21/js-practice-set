/**
 * Write a function stringToNumber that takes a string
 *  input and tries to convert it to a number.
 *  If the conversion fails, return "Not a number".
 */

function stringToNumber(value) {
    let stringInput = Number(value);
    if(Number.isNaN(stringInput)){
        return "Not a number"
    }
}

console.log(stringToNumber("23"));