// Write a JavaScript program to convert temperatures to and from celsius,
// fahrenheit. [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f =
// temperature in fahrenheit ]
function toCelcius() {
    let c;
    let f=-40;
    c = ((f - 32) * 5) / 9
    console.log(c);
}
function toFahrenheit() {
    let c =36;
    let f;
    f = (9 * c) / 5 + 32;
    console.log(f);
}
toCelcius();
toFahrenheit();
