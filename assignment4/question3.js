const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// find the average price over a period of 7 days and count the number of days in which the price was above the 7 day simple moving average

let count = 0;
let average = 0;
let sum = 0;
for (let price of amdPrices){
    sum+=price
};
average = sum/7;

for (let price of amdPrices){
    if (price > average){
        count++;
    }
};
console.log('Number of days AMD was above the 7-day SMA is: '+ count)