// Find the leap years in a given range of years.
function findLeapYears(startYear, endYear) {
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

var startYear = 2000;
var endYear = 2020;
const leapYears = findLeapYears(startYear, endYear);
console.log(leapYears);