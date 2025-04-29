const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
// calculate the average closing price (rounded to 2 decimal places):
//Average closing price of Disney is 123.01

let sum = 0;
let count = 0;
for (let week of disneyData){
	for (let key in week){
		if (key === 'close'){
			sum += parseFloat(week[key])
			count++
		}
	}
}
let average = sum/count;
// Note: normal toFixed(2) rounds .005 to  .00 rather than .01
let corrected_average = (Math.round(average * 100) / 100).toFixed(2); 
console.log('Average closing price of Disney is ' + corrected_average)