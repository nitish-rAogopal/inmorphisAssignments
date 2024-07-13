// Write a JavaScript function to print all the methods in an JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe",
// "unobserve"]

Array.prototype.allProperties = function () {
    const properties = [];
    for (const property in this) {
        if (typeof this[property] === 'function')
            properties.push(property);
    }
    return properties;
}
console.log([].allProperties());

function all_properties(obj) {
    const props = [];
    for (const prop in obj) {
        if (typeof obj[prop] === 'function') {
            props.push(prop);
        }
    }
    return props;
}
console.log(all_properties(Array));