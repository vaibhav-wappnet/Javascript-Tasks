// var Keyword in javascript
// It is used to declare variables in javascript
// Using var one can declare global scope variable
// variables with var declarations can be accessed from anywhere in javascript

var varFirst = "I am first String";
function GlobalVariable() {

    var varSecond = "I am second String";
    console.log(varFirst);
    console.log(varSecond);
}

GlobalVariable(); // calls function and return the value of varFirst and varSecond
console.log(varFirst); // returns the value of varFirst


// let Keyword in javascript
// it is used to declare variables in javascript
// It is used to declare block scope variable

let first = "I am first String and just got executed";

function Block() {

    let second = "I am second String and just got executed";
    console.log(first); // returns the value of the first which is outside of the function scope
    console.log(second);
}

Block(); // calls function Block which prints the values of first and second.
console.log(first); // prints the values of first.



// const Keyword in javascript
// it is used to declare variables in javascript 
// It declares variables whose values are not going to change in the local or block scope
// No variables having declaration with const can be accessed

const constantStr = "I am the constant value";

function Constant() {
    const constantStr1 = "I am the constant inside the function";
    console.log(constantStr1); // returns the value of constantStr1
    console.log(constantStr); // returns the value of constantStr as it is defined before the function
}

Constant(); // calls the function Constant and returns the values of constantStr and constantStr1
// console.log(constantStr1); 
// returns error because we cant access the value const variable is a block scope variable
