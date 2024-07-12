// 14. Write a JavaScript program to remove duplicate items from an array (ignore
//     case sensitivity).

function removeDuplicacy(arr) {
    const result = [];
    const uniqueItems = new Set();
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i].toLowerCase();
        if (!uniqueItems.has(item)) {
            uniqueItems.add(item);
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicacy([ 'A', 'a','c', 't','T']));