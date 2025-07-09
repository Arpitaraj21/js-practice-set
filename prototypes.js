let computer = {
    cpu: 12
};

let lenovo = {
    screen: "HD"
};

let tomHardware = {};


console.log(`computer`, computer.__proto__)



// prototype inheritance

const p1 = {
    fname: 'Arpita',
    lname: 'Raj',
    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

// inheritance
const p2 = Object.create(p1);
console.log("p1 before", p1.fname);

p2.__proto__.fname = "Hack";
console.log("p1 after is ", p1.fname);



console.log(p2.fname);