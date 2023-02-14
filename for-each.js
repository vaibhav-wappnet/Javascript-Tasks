let myArray = [10, 23, 22, 47, 14, 62, 17];

// for
console.log("for Loop for myArray");
for (let index = 0; index < myArray.length; index++) {
    const elm = myArray[index];
    console.log(elm);
}


// foreach
// iterates over every element of the array
// it takes a function as a parameter... 
// this function takes three parameters (currentValue, index, arr) --index and arr are optional 

console.log("forEach loop for myArray");
text = "";
let textH2 = document.getElementById("text");
myArray.forEach((element) => {
    text += `${element} `;
    console.log(element);
});
textH2.innerHTML = text; // sets the innerHTML of text to the iterated myArray