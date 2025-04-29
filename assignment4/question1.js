const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
//Given the following array, 
// find the highest stock price within the provided array and print out the details
//AMD 52-week high is 102.21
const maxPrice = Math.max(...amdPrices);
console.log('AMD 52-week high is '+ maxPrice);