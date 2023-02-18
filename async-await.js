let myFunc = async()=> {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Done!");
        }, 3000);
    })

    let result = await promise;

    console.log(result);
}
console.log("getting results");

myFunc();


// let url = `https://jsonplaceholder.typicode.com/posts/1`;

// let fetchData = async (req, res) => {
//     setTimeout(() => {
        
//     }, 4000);
// }
