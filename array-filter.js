let myArray1 = [10, 23, 53, 22, 24, 55, 45, 96, 74];



console.log("filter method returning an array");
let less50 = myArray1.filter((elm) => {
    return elm < 50 //returns elements less than 50
});
console.log(less50);


let myArray2 = [10, 23, 22, 53, 74, 53, 49, 24, 71];
let ans = myArray2.filter((elm) => {
    return elm >= 50; //returns elements greater than 50
});
console.log(ans);

// the above code can be written as below to make it more readable
let answer = myArray2.filter(element => element >= 50);
console.log(answer);


let myArray3 = ["Vaibhav", "Omen", "Reyna", "Viper", "Fade", "Phoenix", "Breach", "Jett", "Sage"]
let agents = myArray3.filter((agent) => {
    return agent.length >= 5 && agent.length <= 6;
});
console.log(agents);


arr = ["Omen", "Reyna", "Raze", "Fade", "Killjoy", "Reyna"];

const valoAgents = arr.filter((agent, i) => arr.indexOf(agent) === i);
console.log(valoAgents);