// Array of product objects
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 500 },
  { id: 3, name: "Keyboard", price: 1200 },
  { id: 4, name: "Monitor", price: 8000 },
  { id: 5, name: "Headphones", price: 1500 }
];

// Function to search product by name using for...of
function searchProduct(productName) {
  let lowerName = productName.toLowerCase();
  let result = [];

  for (let product of products) {
    if (product.name.toLowerCase().includes(lowerName)) {
      result.push(product); // add matching product to result array
    }
  }

  return result;
}

// Example usage
let search1 = searchProduct("mouse");
let search2 = searchProduct("top");

console.log("Search for 'mouse':", search1);
console.log("Search for 'top':", search2);
