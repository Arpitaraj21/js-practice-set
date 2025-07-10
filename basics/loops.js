/**
 * write a while loop that calculates the sum of all numbers
 *  from 1 to 5 and stores the result in a variable named sum
 */


let sum = 0;
let i = 1;
while(i <= 5){
    sum = sum + i;
    i++;
}

console.log(sum);



/**
 * write a while loop that counts down from 5 to 1 
 * and stores the number in an array named countdown
 */


let countdown = [];

let n = 5;
while(n > 0){
    countdown.push(n);
    n--;
}

console.log(countdown)


/**
 * write a do while loop that prompts a user to enter their favorite tea type
 *  until they enter stop store each type in an array named teaCollection
 */


// let teaCollection = [];
// let tea;


// do{
//    tea = prompt("enter your favourite tea: ")
//    if (tea !== "stop"){
//     teaCollection.push(tea)
//    }
// }
// while(tea !== "stop")




/**
 * write a do while loop that adds numbers from 1 to 3 and
 *  stores the result in a variable named total
 */

let total = 0;
let j = 0;
do{
    total = total + j;
    j++;
}
while(j <= 3)

    console.log(total)



/**
 * write a for loop that multiplies each element in the array [2, 4, 6] by 2 and
 *  stores the results in a new array named multipliedNumbers
 */


let multiplies = [2, 4, 6];

let multipliedNumbers = [];


for(let k = 0; k < multiplies.length; k++){
    multipliedNumbers.push(multiplies[k] * 2);
}

console.log(multipliedNumbers)



/**
 * write a for loop that lists all the cities in the array ["Paris", "New York", "Tokoyo", "London"]
 * and stores each city in a new array named cityList
 */


let cities =  ["Paris", "New York", "Tokoyo", "London"];

let cityList = [];

for(let l = 0; l < cities.length; l++){
    cityList.push(cities[l])
}

console.log(cityList)
