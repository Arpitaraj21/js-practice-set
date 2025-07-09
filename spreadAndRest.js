function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4];

console.log(sumOne(...myA));     /// spread operator




function sumTwo(...args) {
    console.log(args);   // [ 1, 4, 2, 3 ]
    /// rest operator
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg
    }
    return sum;
}

console.log(sumTwo(1, 4, 2, 3));


function sumMore(a, b, ...args) {
    console.log(args);

    let multi = a * b
    let sum = 0;
    for (const arg of args) {
        sum = sum + arg
    }
    return [sum, multi];
}

console.log(sumMore(2, 3, 1, 1, 1));
