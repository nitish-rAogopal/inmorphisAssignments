// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let ordinal;
    if (i === 0) {
        ordinal = o[1]; // "st"
    } else if (i === 1) {
        ordinal = o[2]; // "nd"
    } else if (i === 2) {
        ordinal = o[3]; // "rd"
    } else {
        ordinal = o[0]; // "th"
    }
    console.log(`${i + 1}${ordinal} choice is ${color[i]}.`);
}