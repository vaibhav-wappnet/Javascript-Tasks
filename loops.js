let data = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "black",
        value: "#000"
    },
    {
        color: "yellow",
        value: "#ff0"
    }
];

let text = "";
let textColor = document.getElementById('content');

let colorFunction = () => {
    setTimeout(() => {

        for (let elm in data) {
            text += data[elm].color;
            // console.log(`${data[elm].color}: ${data[elm].value}`);
            // console.log(`${data[elm].value}`);

            // Todo
            // iterate all the colors simultaneously with the setTimeout function

            textColor.style.color = `${data[elm].value}`;
        }
    }, 1000);

}
colorFunction();
