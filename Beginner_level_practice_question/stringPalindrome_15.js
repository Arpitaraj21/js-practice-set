function StringPalindrome() {
    let revered = '';
    let word = "aba";

    for (let i = word.length - 1; i >= 0; i--) {
        revered += word[i];
    }

    console.log(revered);
    if (word === revered) {
        console.log("string is a palindrome");
    }
    else {
        console.log("string is not a palindrome");

    }
}


console.log(StringPalindrome());

