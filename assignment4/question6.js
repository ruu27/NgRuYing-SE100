// Modify the code below:
//find the 3 lowest average prices for AMD stocks:
//The three lowest prices are 79.82, 87.12, and 88.15

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// let data = ()
// for price in data:
// 	if price < 3:
//     data.push(price)

// METHOD 1 - sort
function lowestPrices(prices){
    let num_lowest = 3;
    // Note: to sort in ascending order, need compareFunction
    prices.sort(function(a,b){return a-b});
    lowest_prices = prices.slice(0, num_lowest);
    return lowest_prices;
};
[a,b,c] = lowestPrices(amdPrices)
console.log('The three lowest prices are %f, %f and %f', a, b, c)
console.log('---------')

// METHOD 2 - (more similar to original code structure) while loop, add minimum to empty data structure
let amdPrices2 = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]
let compareList = amdPrices2
let data = []
let num_of_lowest = 3
while (data.length < num_of_lowest){
    // Find min of remaining elements in compareList
    let min = Math.min(...compareList)
    // Add min to data
    data.push(min)
    // Remove current min from compareList
    let minIndex = compareList.indexOf(min)
    compareList.splice(minIndex, 1)
}
let last = data.pop()
console.log('The three lowest prices are ' + data.join(', ') +' and ' + last)