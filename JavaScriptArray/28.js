// Write a JavaScript function to find the longest common starting substring in a
// set of strings.
// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"
function longest_common_starting_substring(arr) {
    return arr.reduce((a, b) => {
        let i = 0;
        while (i < a.length && i < b.length && a[i] === b[i]) {
            i++;
        }
        return a.substring(0, i);
    });
}

// Sample array
console.log(longest_common_starting_substring(['goo', 'google']));