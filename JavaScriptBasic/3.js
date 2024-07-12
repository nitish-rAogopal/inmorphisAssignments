// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
let t = new Date();

let dd = t.getDate();
let mm = t.getMonth();
let yyyy = t.getFullYear();

if (dd < 10)
    dd = "0" + dd;
if (mm < 10)
    mm = "0" + mm;
console.log(mm + "-" + dd + "-" + yyyy);

console.log(mm + "/" + dd + "/" + yyyy);

console.log(dd + "-" + mm + "-" + yyyy);

console.log(dd + "/" + mm + "/" + yyyy);