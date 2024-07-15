// Write a JavaScript function to extract unique characters from a string
// “thequickbrownfoxjumpsoverthelazydog”.

function unique(str) {
    const arr = str.split('');
    const res = [];
    for (var i = 0; i < arr.length; i++)
        if (!res.includes(arr[i]))
            res.push(arr[i]);
    return res.join('');
}
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));