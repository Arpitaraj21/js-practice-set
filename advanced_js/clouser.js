function createCounter() {
    let count = 0;
    function increment() {
        count++
    }
    return count;
}

let val = createCounter();

console.log(createCounter());