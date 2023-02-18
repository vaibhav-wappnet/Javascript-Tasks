# JavaScript Tasks

This repository contains all the all the files related to the `Array` and `methods` methods `Array iterators`

Various `array` methods and `String` methods are covered in this repository.

There are different files for the different methods and iterators

## Run Code

To run the javaScript file in the terminal use `node` command before the file path followed by the file name with `.js` extension.

eg.

`node /path_to_file/file_name.js`

## reference

[let, const variables in JavaScript](https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/)

[Arrow function is JavaScript](https://www.javascripttutorial.net/es6/javascript-arrow-function/)

[String methods in JavaScript](https://www.w3schools.com/js/js_string_methods.asp)

[Array methods in JavaScript](https://www.w3schools.com/js/js_array_methods.asp)

[iterators in JavaScript](https://www.w3schools.com/js/js_array_iteration.asp)

[Callbacks in JavaScript](https://www.w3schools.com/js/js_callback.asp)

[Promises in JavaScript](https://www.w3schools.com/js/js_promise.asp)

[async/await in JavaScript](https://www.javascripttutorial.net/es-next/javascript-async-await/)

# File Description

## let-const.js

> Using var one can declare global scope variable. Variables with var declarations can be accessed from anywhere in javascript

## arrowfunc.js

> Arrow function is a shortened way of writing a function, the syntax can be any of the following code

> arrow function with basic syntax.
```javascript
let func1 = () => {
	let str = "Hello Reyna Welcome";
	console.log(str);
};
```

> arrow function with no parentheses.
```javascript
let func3 = () => "Hello Reyna Again!!";
```

> arrow function with parameters passes as an argument without parentheses.
```javascript
let func5 = (val) => "Hello! Finally you've come " + val;
```

## str-methods.js

```javascript
str.toUpperCase();
str.concat(" " + str2);
str.charAt(6);
str.split(" ");
str.includes("Reyna");
```
> This file contains all the string methods. Some of the examples are listed above.

## array-methods.js

```javascript
arr.pop();
arr.toString();
arr.push("Sage");
myArray.splice(1, 0, "Hero");
```
> This file contains all the array methods. Some of them are listed above.

## for-each.js
> foreach iterates over every element of the array

```javascript
myArray.forEach((element) => {
	text += `${element} `;
	console.log(element);
});
```

## for-in.js

> for in does the same as the foreach loop. It iterates over all the elements of the array.

```javascript
for (let elm in data) {
	console.log(`${data[elm].color}`);
}
```

## callback

> callbacks are javascript functions passed as an argument to another function

## Promises

> A Promise is a proxy for a value not necessarily known when the promise is created.

## async/await

> async makes a function return a Promise. await makes a function wait for a Promise.

---
# [GitHub Profile](https://github.com/vaibhav-wappnet/)