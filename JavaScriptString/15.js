// Write a JavaScript function to humanized number (Formats a number to a
//     human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.
//     Test Data :
//     console.log(humanize_format());
//     console.log(humanize_format(1));
//     console.log(humanize_format(8));
//     console.log(humanize_format(301));
//     console.log(humanize_format(402));
//     "1st"
//     "8th"
//     "301st"
//     "402nd"

function humanize_format(num) {
    var str = '';
    if (num === undefined)
        return '';
    if (num % 10 === 1)
        str = new String(num) + 'st';
    else if (num % 10 === 2)
        str = new String(num) + 'nd';
    else if (num % 10 === 3)
        str = new String(num) + 'rd';
    else
        str = new String(num) + 'th';
    return str;
}

console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));