const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
// 💡 calculate the average closing price. Structure of the array is as follows:
// - index 0 - Open
// - index 1 - High
// - index 2 - Low
// - index 3 - Close

let sum = 0;
let average = 0;
for (let arr of msftData){
	sum+=arr[3]
};
average = (sum/msftData.length).toFixed(2);
console.log("Average closing price of MSFT is "+ average);

