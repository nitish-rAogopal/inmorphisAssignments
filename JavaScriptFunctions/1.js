// Write a JavaScript function that reverse a number.
function reverse(num) {
    let numSt = num.toString();
    let revSt = "";
    for(let i= numSt.length-1; i>=0; i-- )
        revSt +=numSt[i];
   return parseInt(revSt);
}

function reverse2(num){
    let rev =0;
    while(num>0){
        rev = rev*10 + num%10;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverse(234567));
console.log(reverse2(234567));