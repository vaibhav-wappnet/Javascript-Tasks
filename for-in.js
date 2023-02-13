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
        color: "yellow",
        value: "#ff0"
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
        color: "black",
        value: "#000"
    },
    {
        color: "magenta",
        value: "#f0f"
    }
];

let text = "";

setTimeout(() => {
    
    for (let elm in data) {
    
        text += `${data[elm].color} `;
        console.log(`${data[elm].color}: ${data[elm].value}`);

        // console.log(`${data[elm].value}`);
        // console.log(text);
        
    }
    document.getElementById('colorData').innerHTML = text;
}, 2000);
