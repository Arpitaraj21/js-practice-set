// Write a function that returns the factorial of a number.


function isFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log(isFactorial(4))
