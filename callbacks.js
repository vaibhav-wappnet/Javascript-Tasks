// let x = () => {
//     console.log("x is called");
// }

// let y = () => {
//     console.log("y is called inside x function");
// }

// this line firstly calls the function x which returns function y but y again calls x so the bracketed x function will be called.
// after the bracketed x function the bracketed y will be called.
// and lastly the outer most x function will be called.
// x(y(x()));

function main() {
    firstFunction();
    secondFunction();
}

function firstFunction() {
    console.log("I am the first function");
}
function secondFunction() {
    console.log(("I am the second function"));
}

// this code will call the firstFunction which returns secondFunction 
// so the secondFunction is executed first.
main();
firstFunction(secondFunction());
