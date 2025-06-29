/*  1) declare an array named teaFlavors that contains the string "green tea" , "black tea", and "oolong tea".
access the first element of the array and store it in a variable named 'firstTea
 */


const teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];
console.log(firstTea);



/*2)
declare an array named cities, containing "london", "tokyo", "paris" and "new york",
access the third element in the array and store it in a variable named favoriteCity
*/

const cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];
console.log(favoriteCity);



/* 3)
you have an array name teaTypes, containing herbal tea, white tea, masala chai,
 change the second element of the array to jasmine tea
*/

const teaTypes = ["herbal tea", "white tea", "masala chai"];

 teaTypes[2] = "jasmine tea";
 console.log(teaTypes);


 /* 4)
 declare an array named citiesVisited containing mumbai and sydeny
 add berlin to the array using the push method
  */

 const citiesVisited = ['mumbai', 'sydeny'];

 citiesVisited.push('berlin');
 console.log(citiesVisited)


 /* 5)
 you have an array named teaOrders with 'chai', 'iced tea', 'matcha', and 'earl grey'.
 remove the last element of the aaray using the pop method and store it in a variable named lastOrder
 */

 const teaOrders = ['chai', 'iced tea', 'matcha', 'earl grey'];
 teaOrders.pop();
 console.log(teaOrders)


 /*
6) you have an array named popularTeas containing green tea oolong tea and chao .
create  soft copy of this array named softCopyteas


  */

const popularTeas = ['green tea', 'oolong tea', 'chao'];
const softCopyteas = popularTeas;
console.log(softCopyteas)


/**
 you have an array named topCities containing 'Berlin', 'Singapore and 'new york'
 create a hard copy of this array named hardCopyCities
 */

 const topCities = ['Berlin', 'Singapore', 'New York'];
 let hardCopyCities = [...topCities];
 // with this a hard copy is created that means another copy of array is created
 console.log(topCities);
 console.log(hardCopyCities);

 const arr = [1, 2, 3, 4];
 const arr2 = [5, 6];

//  console.log(arr.concat(arr2));
//  console.log(arr.push(arr2));
// //  console.log(arr.merge(arr2));
//  console.log(arr.join(arr2));


/*
you have two arrays    `europeanCities, containing 'paris and rome and asianCities containing Tokyo and Bangkok
merge these two arrays into a new array named worldCities
 */

const europeanCities = ['Paris', 'Rome'];
const asianCities = ["Tokyo", "Bangkok"];

worldCities = europeanCities.concat(asianCities)
console.log(worldCities)


/**
 * you have an array named teaMenu containing masala chai oolong tea, green tea and earl grey
 * find the length of an array and store it in a varibale named menuLength
  
 */

const teaMenu = ["masala chai", "oolong chai", "green tea", "earl grey"];

menuLength = teaMenu.length;
console.log(menuLength)


/**
 * you have an array named cityBucketList containi g kyoto London Cape Teow and Vancouver
 * check if London is in the array and store the resukt in a variable named 'isLondonInList
 */


const cityBucketList = ['Kyoto', 'London', 'Cape Town', 'Vancouver'];

let isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);