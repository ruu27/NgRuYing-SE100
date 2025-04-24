const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Write your code below
// Write JavaScript code to check the pricing trend of the given data, with the following logic:

// - if close > open
//     - if volume > 100000 → log ‘Strong Bullish’ in your console
//     - else → log ‘Bullish’ in your console
// - close < open
//     - if volume > 10000 → log ‘Strong Bearish’ in your console
//     - else → log ‘Bearish’ in your console
// - close === open
//     - log ‘neutral’ in your console
// Expected output: "Bullish"

const open = disneyData['open']
const close = disneyData['close']
const volume = disneyData['volume']

if (close > open) {
    if (volume > 100000) {console.log("Strong Bullish")}
    else {console.log("Bullish")}
}
else if (close < open) {
    if (volume > 10000) { console.log("Strong Bearish")}
    else {console.log("Bearish")}
}
else if (close === open) {console.log("neutral")}
else {console.log("Error")}