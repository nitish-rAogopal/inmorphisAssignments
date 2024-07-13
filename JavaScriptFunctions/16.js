// Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function uniqueCharacter(str) {
    var unique = '';
    for (var i = 0; i < str.length; i++) {
        if (!unique.includes(str[i]))
            unique += str[i];
    }
    return unique;
}
console.log(uniqueCharacter("thequickbrownfoxjumpsoverthelazydog"));