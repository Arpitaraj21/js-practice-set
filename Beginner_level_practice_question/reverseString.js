function reverseString(string) {
    let reverseString = '';
    const word = "arpita";


    for (let i = word.length - 1; i >= 0; i--) {
        reverseString += word[i]
    }

    console.log("Original:", word);
    console.log("Reversed:", reverseString);
    return reverseString;
}

console.log(reverseString());