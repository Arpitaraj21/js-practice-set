// Task 1: Array Filtering
// Write a function filterNumbers(arr) that returns only numbers from a mixed array



function filterNumbers(arr) {
    return arr.filter((item) => typeof item === "number")
}

let number = [1, 34, "age", 76, "abc"];

console.log(filterNumbers(number))




// Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array

function reverseArray(arr) {
    return arr.reverse();
}

let array = [1, 2, 3, 4];
console.log(reverseArray(array));


// Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr) {
    return Math.max(...arr);
}
let array1 = [1, 2, 3, 4];
console.log(findMax(array1))

// Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed

function removeDuplicates(arr) {
    return [...new Set(arr)];
}


// Task 5: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array


function flattenArray(arr) {
    return arr.flat(Infinity)
}




// Task 1: Sum of First N Natural Numbers
// Write a function sumOfN(n) that returns the sum of the first n natural numbers


function sumOfN(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count = count + i;
    }
    return count;
}


console.log(sumOfN(4));


// Task 2: Multiplication Table
// Write a function printMultiplicationTable(n) that returns the
//  multiplication table for n. Values return in the array must be of the 
// format 2 * 2 = 4

function printMultiplicationTable(n) {
    let multiVal = []
    for (let j = 1; j <= 10; j++) {
        multiVal.push(`${n} * ${j} = ${n * j}`);

    }
    return multiVal;
}


console.log(printMultiplicationTable(2))

// Task 3: Count Vowels in a String
// Write a function countVowels(str) that returns the number of vowels 
// (in both lower & uppercase) in the given string str.


function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let k = 0; k < str.length; k++) {
        if (vowels.includes(str[k])) {
            count++;
        }
    }
    console.log(count)
    return count;
}

console.log(countVowels("abcde"));