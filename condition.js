// check if a number is greater than another number

let num1 = 5;
let num2 = 6

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`);
}
else{
    console.log(`${num2} is greater than ${num1}`)
}


// check if a string is equal to another string

let string1 = "Arpita";
let string2 = "Arpita";

if(string1 === string2) {
    console.log("It is equal")
}
else{
    console.log("it is not equal")
}


// check if a variable is a number or not

let number = 23;


console.log(typeof(number) === "number")

if(typeof(number) === "number"){
    console.log("it is a number");
}
else{
    console.log("it is not a number");
}


// check if a boolean value is true or false

let value = true;

if (value == 1) {
    console.log("it is a true value");
}
else{
    console.log("it is a false value");
}

if (value) {
    console.log('true');
}
else{
    console.log('false')
}



// check if an array is empty or not

let array = [2, 13,45];

if(array.length == 0) {
    console.log('it is an empty array')
}
else{
    console.log('it is not an empty array')
}

