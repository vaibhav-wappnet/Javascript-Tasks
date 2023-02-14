let arr = ["Vaibhav", "Reyna", "Omen", "Raze", "Fade"];
console.log(arr);


// converts array to string
let arrToStr = arr.toString();
console.log(arrToStr);


// pops(removes) the last element from the array
let popArr = arr.pop();
console.log(popArr);
console.log(arr);


// pushes (inserts) an element at the end of the array
//  push returns a new array length
let pushArr = arr.push("Sage");
console.log(pushArr);
console.log(arr);


// shifts the first element from the array
// here first element was "Vaibhav" so it is removed from the array
// here shiftArr returns the shifted element of the array
let shiftArr = arr.shift();
console.log(shiftArr);
console.log(arr);


// unshift the element in the array
// in short adds an element in the beginning of the array
// unshift returns the new array length
let unshiftArr = arr.unshift("Phoenix");
console.log(unshiftArr);
console.log(arr);


// returns the length of the array
console.log(`Length of the array : ${arr.length}`);



// splice Method  --IMP--
// it is used to add or delete element in the array
// it does not creates a new array
// takes  main two parameters
// 1. position where to add or delete the element
// 2. number of elements to which are going to be deleted
// the rest of the parameters are considered as the elements to be inserted

let myArray = ["Yamaha", "Honda", "BMW", "Ducati", "Bajaj"];

// here at position 1 in array 0 elements are deleted and an element is inserted at position 1
let addToArr = myArray.splice(1, 0, "Hero");
console.log(myArray);

// here at position 3 in array 1 element is deleted and no element is inserted
let delFromArr = myArray.splice(3, 1);
console.log(delFromArr); //returns deleted element
console.log(myArray);

// here at position 4 in array 1 element is deleted and 1 element is inserted
let AddAndDel = myArray.splice(4, 1, "BMW");
console.log(AddAndDel); // returns deleted element
console.log(myArray);



// slice method --IMP--
// it slice out the elements from the array from the start position
// it creates a new array
// it takes two parameters 1.start position 2. end position(not inclusive)
// it can take negative values as parameters which will perform adding from the backwards
// it does not removes the sliced element from the original array


console.log("slice method called");
console.log(myArray);

// slice method with one parameter
let sliceArr = myArray.slice(1);
console.log(sliceArr); // returns the sliced array
console.log(myArray); // as show in console it does not changes the original array


// slice method with two parameters
let sliceArr2 = myArray.slice(1, 4);
console.log(sliceArr2); // returns sliced array from position 1 to 4(exclusive)
console.log(myArray);  // returns the original array

