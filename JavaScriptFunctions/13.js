// Write a JavaScript function to compute the factors of a positive integer.
function factors(num){
    let count=0, fact="";
    for(let i =0;i <=num;i++){
        if(num%i===0){
            count++;
            fact += i + " ";
        }
    }
    console.log("total factors : ", count);
    console.log(fact);
}
factors(60);