function greet() {
    console.log("hello");
}

// constructor function

function Person(name, age) {
    this.name = name
    this.age = age
}

function Car(make, model){
    this.make = make
    this.model = model
}

let myCar = new Car("toyota", "camry")

console.log(myCar)


function Tea(type) {
    this.type = type
    this.description = function(){
        return `this is a cup of ${this.type}`;
    };
} 

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.description());



function Animal(specis){
    this.specis = specis;
}

Animal.prototype.sound = function(){
    return `${this.specis} makes a sound`
}
let dog = new Animal("Dog");
console.log(dog.sound())