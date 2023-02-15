function greet(name, callback) {
    console.log(`hello ${name}!`);
    callback();
};

function message() {
    console.log(`I contain the message with the callback function`);
}
greet("Vaibhav", message);



// using API
let URL = `https://jsonplaceholder.typicode.com/users`

let fetchData = (url, callback) => {
    console.log(`Data is being fetched...`);
    callback(url);
}

let data = (url) => {
    setTimeout(() => {
        console.log(`data fetched! from the URL : ${url}`);
        console.log(`${url[1].name}`)
    },3000)
}
fetchData(URL, data);


