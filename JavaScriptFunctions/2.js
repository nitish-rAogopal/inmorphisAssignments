// Write a JavaScript function that checks whether a passed string is palindrome or not?

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++){
        if(str[i]!==str[len-1-i])
            return false;
        return true;
    }
}
console.log(isPalindrome("ramar"));
console.log(isPalindrome("god"));
console.log(isPalindrome("malayalam"));