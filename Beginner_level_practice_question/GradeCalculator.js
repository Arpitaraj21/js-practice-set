// Grade calculator (input: marks, output: grade A/B/C/...).


let marks = 45;

if (marks > 90) {
    console.log('A grade')
}
else if (marks > 70) {
    console.log('B grade');
}
else if (marks > 60) {
    console.log('C grade')
}
else if (marks >= 45) {
    console.log('D grade');
}
else {
    console.log('FAIL')
}