// Write a JavaScript function to insert a string within a string at a particular
// position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

function insert(str, to_insert = '', position = 0) {
    if (str === '')
        return str;
    else if (str !== '' && position === 0)
        return to_insert  + str;
    else {
        const str1 = str.slice(0, position);
        const str2 = str.slice(position);
        return str1 +  to_insert +   str2;
    }
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));