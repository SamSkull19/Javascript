function greetUser(callback) {
    console.log("Welcome to the system!");
    callback(); // calling the function passed as argument
}

function showMessage() {
    console.log("You have successfully logged in.");
}

greetUser(showMessage);



function calculate(a, b, operation) {
    return operation(a, b); // calling the function passed in
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 10, add));      // 15
console.log(calculate(5, 10, multiply)); // 50




const manageProduct = (callback, name, price) => {
    console.log("Managing product...");
    callback(name, price);
}

const printProduct = (name, price) => {
    console.log(`Product: ${name}, Price: ${price}`);
}

const discountProduct = (name, price) => {
    console.log(`Discounted ${name}: ${price * 0.9} after 10% off`);
}

manageProduct(printProduct, "Camera", 50000);
manageProduct(discountProduct, "Laptop", 100000);