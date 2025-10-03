// Base class: Product
class Product {
    constructor(name, brand, type) {
        this.name = name;   // Product name
        this.brand = brand; // Brand name
        this.type = type;   // Product type (e.g., Electronics)
    }

    // Method in the parent class
    productInfo() {
        return `Product: ${this.name} | Brand: ${this.brand} | Type: ${this.type}`;
    }
}

// Child class: Mobile
class Mobile extends Product {
    constructor(name, brand, type, model, price) {
        super(name, brand, type); // Call parent constructor
        this.model = model;
        this.price = price;
    }

    mobileInfo() {
        return `${this.productInfo()} | Model: ${this.model} | Price: $${this.price}`;
    }
}

// Child class: Laptop
class Laptop extends Product {
    constructor(name, brand, type, processor, ram, price) {
        super(name, brand, type);
        this.processor = processor;
        this.ram = ram;
        this.price = price;
    }

    laptopInfo() {
        return `${this.productInfo()} | Processor: ${this.processor} | RAM: ${this.ram}GB | Price: $${this.price}`;
    }
}

// Child class: TV
class TV extends Product {
    constructor(name, brand, type, screenSize, price) {
        super(name, brand, type);
        this.screenSize = screenSize;
        this.price = price;
    }

    tvInfo() {
        return `${this.productInfo()} | Screen Size: ${this.screenSize} inches | Price: $${this.price}`;
    }
}

// Create product objects
const mobile1 = new Mobile("iPhone", "Apple", "Smartphone", "iPhone 15", 1200);
const mobile2 = new Mobile("Galaxy", "Samsung", "Smartphone", "Galaxy S23", 999);

const laptop1 = new Laptop("MacBook Pro", "Apple", "Laptop", "M3 Pro", 16, 2500);
const laptop2 = new Laptop("ThinkPad", "Lenovo", "Laptop", "Intel i7", 32, 1800);

const tv1 = new TV("Bravia", "Sony", "Television", 55, 1500);
const tv2 = new TV("QLED", "Samsung", "Television", 65, 2000);

// Display information
console.log(mobile1.mobileInfo());
console.log(mobile2.mobileInfo());

console.log(laptop1.laptopInfo());
console.log(laptop2.laptopInfo());

console.log(tv1.tvInfo());
console.log(tv2.tvInfo());
