let myArray = [12000, 100, 430, 225, 890, 540, 700, 210];

let totalSalary = myArray.reduce((total, item) => {
    return total + item;
});
console.log(`Total Salary : ${totalSalary}`);

let remainingSalary = myArray.reduce((total, item) => {
    return total - item;
});
console.log(`Remaining Salary : ${remainingSalary}`);

let cart = [
    {
        product: "milk",
        qty: 1,
        price: 30,
    },
    {
        product: "bread",
        qty: 3,
        price: 50,
    },
    {
        product: "peanut butter",
        qty: 2,
        price: 70
    }
];

let totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.qty * curr.price;
}, 0);
console.log(totalPrice);