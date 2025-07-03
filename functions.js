/**
 * 1) write a function named 'makeTea' that takes one parameter , typeOfTea and returns a string 
 * like "making green tea" when called with green tea. store the result in a variable named 'teaOrder'
 */



function makeTea(typeOfTea) {
    return (`making ${typeOfTea}`)
}

let teaOrder = makeTea("ginger tea");

console.log(teaOrder);


/** 2)
 * create a function named orderTea that takes one parameter teaType. Inside this function, create 
 * another function named 'confirmOrder' that returns a message like Order confirmed for chai, call 
 * confirmOrder from within orderTea and return the result
 */

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`
    }

    return confirmOrder();
}


console.log(orderTea("coffee"));


/** 3)
 * write an arrow function named calculatedTotal that takes, two parameters price and quantity, 
 * the function shpuld return the total cost by multiplying the price and quantity,
 */

const calculatedTotal = (price, quantity) => {
    return (price * quantity);
}

let totalCost = calculatedTotal(2, 4);


/** 4)
 * write a function named 'processTeaOrder that takes another function makeTea as a parameter and calls 
 * it with the argument "earl grey" return the result of calling makeTea
 */


// const makeTea = () => {}

// const processTeaOrder = (makeTea) => {
//     return makeTea;
// } 

// console.log(processTeaOrder("earl grey"))



function makeTea(typeOfTea) {

}
function processTeaOrder(teaFunction) {

}



console.log(processTeaOrder(makeTea("earl grey")))


function filterNumbers(arr) {
    if (typeof arr == "number") {
        arr.push();
    }
    return arr;
}

