// Write a JavaScript function which says whether a number is perfect.

function checkPerfectNumber(num) {
    let factsum = 0;
    for (let fact = 1; fact <= num / 2; fact++) {
        if (num % fact === 0) {
            factsum += fact;
        }
    }
    if (factsum === num && factsum !== 0)
        console.log("Perfect Number");
    else
        console.log("Not perfect number");
}
checkPerfectNumber(28);
checkPerfectNumber(496);
checkPerfectNumber(8128);