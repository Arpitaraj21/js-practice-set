// Calculate the sum of digits of a number.


let number = 123;

let sum = 0;

while (number > 0) {
    let digit = number % 10;
    sum = sum + digit;
    number = Math.floor(number / 10)
}
console.log(sum)
