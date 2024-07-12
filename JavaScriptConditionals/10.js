// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// Variables to control loop counters and character output
var x, y, chr;
for (x = 0; x <= 5; x++) {
    for (y = 0; y < x; y++) {
        chr = chr + ("*");
    }
    console.log(chr);
    chr = '';
} 
