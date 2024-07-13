// Write a JavaScript program to create a Clock.
// Note : The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

// setInterval((time = () => {
//     var d = new Date();
//     hh = d.getHours();
//     mm = d.getMinutes();
//     ss = d.getSeconds();
//     if (hh < 10)
//         hh = '0' + hh;
//     if (mm < 10)
//         mm = '0' + mm;
//     if (ss < 10)
//         ss = '0' + ss;
//     console.log(hh + ":" + mm + ":" + ss);
// }), 1000)


Date.prototype.time = function () {
    hh = this.getHours();
    mm = this.getMinutes();
    ss = this.getSeconds();
    if (hh < 10)
        hh = '0' + hh;
    if (mm < 10)
        mm = '0' + mm;
    if (ss < 10)
        ss = '0' + ss;
    return (hh + ":" + mm + ":" + ss);

}
const d = new Date();
setInterval(() => {
    console.log(d.time())
}, 1000);