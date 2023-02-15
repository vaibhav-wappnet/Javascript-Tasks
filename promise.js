// promise with resolve or on successful run
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 successful!!");
    }, 3000);
    // reject("rejected!!");
});

promise1
    .then((successMsg) => {
        console.log(successMsg);
    }, (errorMsg) => {
        console.log(errorMsg);
    });
// console.log(promise.state);



// promise on error or reject value
let promise2 = new Promise((resolve, reject) => {
    reject(new Error("oops :( Some error has occurred!!"));
});

promise2.then((successMsg) => {
    console.log(successMsg);
}, (errorMsg) => {
    console.log(errorMsg);
}
);
