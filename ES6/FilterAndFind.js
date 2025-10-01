const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Headphones", category: "Electronics", price: 150 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 85 },
  { id: 5, name: "Coffee Maker", category: "Appliances", price: 220 },
  { id: 6, name: "Book", category: "Stationery", price: 20 },
  { id: 7, name: "Desk Chair", category: "Furniture", price: 350 },
  { id: 8, name: "Phone", category: "Electronics", price: 100 },
  { id: 9, name: "Watch", category: "Electronics", price: 999 },
  { id: 10, name: "Ball", category: "Sports", price: 99 },
  { id: 11, name: "Bat", category: "Sports", price: 15 },
  { id: 12, name: "CS:GO", category: "Games", price: 200 },
  { id: 13, name: "Shirt", category: "Clothing", price: 250 },
  { id: 14, name: "TShirt", category: "Clothing", price: 250 },
  { id: 15, name: "Jeans", category: "Clothing", price: 250 },
  { id: 16, name: "Cap", category: "Clothing", price: 250 },
  { id: 17, name: "Hat", category: "Clothing", price: 250 }
];

// Filter products with price greater than 100
const price100 = products.filter(product => product.price > 100);
console.log(price100);

// Filter all Electronics category products
const electronics = products.filter(product => product.category === 'Electronics');
console.log(electronics);

// Filter products whose id is greater than 5
const productNum = products.filter(product => product.id > 5);
console.log(productNum);

// Filter all clothing products
const clothing = products.filter(product => product.category === 'Clothing');

// Loop through clothing items and print details nicely
clothing.forEach(cloth => {
    console.log(`${cloth.id}. Product Name: ${cloth.name} | Product Category : ${cloth.category} | Product Price : $${cloth.price}`);
});

// Find the first product with name "Shirt"
const shirt = products.find(v => v.name === 'Shirt');
console.log(shirt);

// Find the product with id = 7
const product7 = products.find(v => v.id === 7);
console.log(product7);

// Find the first product that belongs to category "Clothing"
const productCategory = products.find(v => v.category === 'Clothing');
console.log(productCategory);

// Filter products that are not in "Clothing"
const notCloths = products.filter(v => v.category !== "Clothing");
console.log(notCloths);


// First filter only products that belong to the "Clothing" category
// Then map over that filtered list to extract only the product names
const clothingNames = products
  .filter(p => p.category === "Clothing") // keeps only clothing items
  .map(p => p.name); // extracts just the "name" property from each item

console.log(clothingNames); // Prints array of clothing product names


