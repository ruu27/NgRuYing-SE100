const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
//You are to print out the result of the calculation based on the formula below:
// open - high + low - close
// Hint: Consider using .toFixed() to change the decimal point of a number
// Expected output: -2.57

const result = (parseFloat(disneyData['open']) - 
parseFloat(disneyData['high']) +
parseFloat(disneyData['low']) -
parseFloat(disneyData['close'])).toFixed(2) 

console.log(result)