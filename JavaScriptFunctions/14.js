// Write a JavaScript function to convert an amount to coins.

function amountTocoins(amt, coins) {

    const c = [];
    var i = 0;
    while (i < coins.length) {
        if (amt >= coins[i]) {
            c.push(coins[i]);
            amt -= coins[i];
        }
        else
            i++;
    }
    return c;
}

// function amountTocoins(amount, coins = [25, 10, 5, 1]) {
//     const coinValues = coins.sort((a, b) => b - a);
//     const result = [];

//     for (let i = 0; i < coinValues.length; i++) {
//       const coinValue = coinValues[i];
//       const count = Math.floor(amount / coinValue);

//       if (count > 0) {
//         result.push({ coin: coinValue, count });
//         amount -= count * coinValue;
//       }
//     }

//     return result;
//   }
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));