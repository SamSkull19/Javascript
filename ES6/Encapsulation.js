// Base class with Encapsulation
class Product {
    // Private fields (cannot be accessed directly outside this class)
    #name;
    #brand;
    #price;

    constructor(name, brand, price) {
        this.#name = name;
        this.#brand = brand;
        this.#price = price;
    }

    // Public method to get product details (controlled access)
    getDetails() {
        return `Product: ${this.#name} | Brand: ${this.#brand} | Price: $${this.#price}`;
    }

    // Getter for price (read-only access)
    get price() {
        return this.#price;
    }

    // Setter for price (with validation)
    set price(newPrice) {
        if (newPrice > 0) {
            this.#price = newPrice;
        } else {
            console.log("Invalid price. Must be greater than 0.");
        }
    }
}

// Create product object
const product1 = new Product("iPhone", "Apple", 1200);

console.log(product1.getDetails());   // Allowed: uses method
console.log(product1.price);          // Allowed: uses getter
product1.price = 1500;                // Allowed: uses setter
console.log(product1.price);          // 1500

// Direct access to private field throws error
// console.log(product1.#price);  // ❌ SyntaxError
