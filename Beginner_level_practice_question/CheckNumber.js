// Write a program to check if a number is positive, negative, or zero.


let num = -1;
if (num >= 1) {
    console.log('positive');
}

if (num == 0) {
    console.log('zero');
}

if (Math.sign(num) < 0) {
    console.log('negative');
}