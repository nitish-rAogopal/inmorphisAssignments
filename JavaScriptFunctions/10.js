// Write a JavaScript function which returns the n rows by n columns identity
// matrix.

function identityMatrix(n) {
    let i, j, text = "";
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {
                text += 1 + " ";
                //console.log(1);
            }
            else {
                text += 0 + " ";
                //console.log(0)
            }
        }
        console.log(text);
        text = "";
       
    }
}
identityMatrix(5);