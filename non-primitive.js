const username = {
    firstname: 'Arpita',
    "last-name": 'Raj',
    isLoggedIn: true,
}


console.log(username['last-name']);
console.log(username.isLoggedIn);
// console.log(username.last-name); // gives error 
// console.log(username.last-name);
// ReferenceError: name is not defined


console.log(username);
console.log(typeof username);


// array - collection of things

let heros = ["a", "b", "c", true]


let isValue = "2bcd"

console.log(typeof isValue);
console.log(typeof Number(isValue))
console.log(typeof Number(undefined));
console.log(typeof Number(null).valueOf());