const p = Promise.resolve('World');
const promise2 = new Promise(resolve => setTimeout(
    () => resolve('Hello '), 1000
));

p.then( (value) => {
    promise2.then((finalValue) => {
        console.log(finalValue + value);
    })
}
)