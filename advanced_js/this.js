const Person = {
    name: "Arpita",
    greet() {
        console.log(`Hi, I am ${this.name}`);

    }
}


Person.greet();

const greetFunction = Person.greet
greetFunction()


const boundFreet = Person.greet().bind({ name: "raj" });
boundFreet()