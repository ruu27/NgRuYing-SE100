const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// find the average price over a period of 7 days
//The 7-day SMA of AMD is 90.97

let sum=0
for (let price of amdPrices){ //Note: using 'in' will concat to 123456
    sum+=price;
}
const average = (sum/7).toFixed(2)
console.log('The 7-day SMA of AMD is '+ average)