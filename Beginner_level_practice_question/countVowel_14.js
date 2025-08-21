function CountVowel() {
    let count = 0;
    vowel = "aeiou";
    let word = "arpita";
    for (let i = 0; i < word.length; i++) {
        if (vowel.includes(word[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(CountVowel());