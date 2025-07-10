/** 1)
 * write a for loop that loops through the array  ["green tea", "black tea", "chai", "oolong tea"]
 * and stops the loop when it finds chai.
 * store all teas before chai in a new array named selectedTeas
 */


let array = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i=0; i<array.length; i++){
    if(array[i] == "chai"){
        break;
    }
        selectedTeas.push(array[i]);
}

console.log(selectedTeas);



/** 2)
 * write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris".
 * store the other cities in a new array named visitedCities
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for(let j = 0; j < cities.length; j++){
    if(cities[j] === "Paris"){
        continue;
    }
    
    visitedCities.push(cities[j]);
}
console.log(visitedCities);


/** 3)
 * use a for of loop to interate through the array [1, 2,3, 4,5]
 * and stop when the number 4 is found. 
 * Store the numbers before 4 in an array named smallNumbers
 */

let numbers = [1, 2, 3, 4,5];
let smallNumbers = [];

for (const i of numbers) {
    if(i === 4){
        break;
    }
    smallNumbers.push(i)
}

console.log(smallNumbers)

/** 4) 
 * use a for-of loop to interate through the array ["chai", "green tea", "herbal tea", "black tea"]
 * and skip herbal tea. store the other teas in an array named 'preferredTeas
 */

let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const items of teas) {
    if(items === "herbal tea"){
        continue;
    }
    preferredTeas.push(items);
}

console.log(preferredTeas);

/**  5)
 * use a for in loop to loop through an object containing city populations.
 * stop the loop when the population of 'Berlin' is found and store all
 * precious cities 
 * populations in a new object named 'cityPopulations
 

let cityPopulations = {
    "london": 8900000,
    "New York": 8400000,
    "Paris": 220000000,
    "Berlin": 35000000
}

*/

let citiesPopulations = {
    "london": 8900000,
    "New York": 8400000,
    "Paris": 220000000,
    "Berlin": 35000000
}

let cityPopulations = {}


for (const k in citiesPopulations) {
    
}