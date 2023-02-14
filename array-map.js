let myArray = [10, 23, 22, 47, 14, 62, 17];


// map function
// this function modifies the array element and returns a new array with modified values
// the original array doesn't get changed

console.log("map function");
let double = myArray.map((element) => {
    return element = element * 2; // doubles the value of each element of array
    // console.log(element);
});
console.log(double);

// above code can be written in below format as well
let double2 = myArray.map(element => element * 2);
console.log(double2);


let square = myArray.map(element => element ** 2);
console.log(square);