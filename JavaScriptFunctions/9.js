// Write a JavaScript function which accepts an argument and returns the type.
function tellsType(arg) {
    return typeof arg;
}
console.log(tellsType("ram"));
console.log(tellsType(46838));
console.log(tellsType(null));
console.log(tellsType(undefined));
console.log(tellsType({ name: "nitish", age: 24 }));
console.log(tellsType([2, 3, 4, 5]));
console.log(tellsType(true));
console.log(tellsType(tellsType));
