let str = "Hello Vaibhav I am Reyna, and Reyna name is obtained from somewhere dark place.";

// returns the length of the string.
console.log(str.length);


// returns exact part of string from specified range.
// takes two parameters which are start and end position
// can take negative values which slices the string  from backwards 
let slicedStr = str.slice(19, 24);
console.log(slicedStr);


// same as slice... it returns the exact part of the string.
// takes two parameters which are start and end position
// can take negative values which slices the string  from backwards 
let subStr = str.substring(6, 14);
console.log(subStr);


// replaces one occurrence specific text from the string
// takes two parameters 1.text to be replaced and 2.the new text in replacement
let replaceStr = str.replace("Reyna", "Viper");
console.log(replaceStr);


// replaces all the occurrence of the specified text from the string
// takes two parameters 1.text to be replaced and 2.the new text in replacement
let replaceAllStr = str.replaceAll("Reyna", "Viper");
console.log(replaceAllStr);


// converts the whole string to  Uppercase string
let strUpperCase = str.toUpperCase();
console.log(strUpperCase);


// converts the  whole string to lowercase string
let strLowerCase = str.toLowerCase();
console.log(strLowerCase);


// joins two or more strings together
let str2 = "Omen is here too!!";
let concatStr = str.concat(" " + str2);
console.log(concatStr);


// Another example of concatenation of more than two strings
let str3 = "Jett has arrived.";
let str4 = "Raze just Aced dude!!!";
multiConcat = str4.concat(" " + str + " " + str2 + " " + str3);
console.log(multiConcat);


// removes all the whitespace from both the side of the string.
let whiteSpaces = "           Too many spaces               ";
console.log(whiteSpaces);

let withoutSpaces = whiteSpaces.trim("");
console.log(withoutSpaces);

// removes whitespace from the start of the string.
let startSpace = whiteSpaces.trimStart();
console.log(startSpace);


// removes whitespace from the end of the string.
let endSpace = whiteSpaces.trimEnd();
console.log(endSpace);


// returns the character at the given index
let charPos = str.charAt(6);
console.log(charPos);

// you can access the properties of the string using []
console.log(str[6]);


// Converts a string into an array 
// it encounters the given values then it will separate it and assume it as the next element of the array
// here if the " "(whitespace) is encountered then it will break the string and take the scanned element(string) as the element of the array
let arrStr = str.split(' ');
console.log(arrStr);


// returns true if the string includes the substring and returns false of the substring is not present in the string
// it is case sensitive
let strIncludes = str.includes("Reyna");
console.log(strIncludes);