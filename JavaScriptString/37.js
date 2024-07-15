// Write a JavaScript function to test case insensitive (except special Unicode
//     characters) string comparison.
//     Test Data :
//     console.log(compare_strings('abcd', 'AbcD'));
//     true
//     console.log(compare_strings('ABCD', 'Abce'));
//     false

function compare_strings(str1, str2) {
    var pat_str1 = new RegExp(str1, 'gi');
    var pat_str2 = new RegExp(str2, 'gi');
    if (pat_str1.test(str2) && pat_str2.test(str1)) return true;
    else return false;
}

console.log(compare_strings('abcd', 'AbcD')); // true
console.log(compare_strings('ABCD', 'Abce')); // false