// Write a function to check if a number is a palindrome.

function isPalindromeNumber(num) {
    let originalNum = num;
    let reverseNum = 0;

    while (num > 0) {
        let digit = num % 10;
        reverseNum = reverseNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    if (reverseNum === originalNum) {
        console.log("It is a palindrome number")
    }
    else {
        console.log("It is not a palindrome number")
    }
}

isPalindromeNumber(123)