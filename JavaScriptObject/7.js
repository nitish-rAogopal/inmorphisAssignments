// Write a JavaScript program which returns a subset of a string.
// Sample Data : dog
// Expected Output : ["d", "do", "dog", "o", "og", "g"]
String.prototype.subSet = function ()  {
    var len = this.length;
    const sub = [];
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len + 1; j++) {
            sub.push(this.slice(i, j))
        }
    }
    return sub;
}
console.log("dog".subSet());