// Object.keys & Object.values
let student = {
  name: "Sifat",
  age: 23,
  dept: "CSE"
};

console.log("// Object.keys & Object.values");
console.log("Keys:", Object.keys(student));   // ["name", "age", "dept"]
console.log("Values:", Object.values(student)); // ["Sifat", 23, "CSE"]


// Nested Objects
let user = {
  id: 101,
  name: "Samin",
  address: {
    city: "Sylhet",
    country: "Bangladesh"
  },
  courses: {
    cse101: "Programming",
    cse202: "Data Structures"
  }
};

console.log("// Nested Objects");
console.log("City:", user.address.city);         // "Sylhet"
console.log("Country:", user.address["country"]); // "Bangladesh"
console.log("Course CSE101:", user.courses.cse101); // "Programming"


// Delete Property
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2025
};

console.log("// Delete Property");
console.log("Before Delete:", car);

delete car.year; // remove "year" property

console.log("After Delete:", car);

console.log("// Check property existence");
console.log("brand" in car);             // true
console.log(car.hasOwnProperty("model")); // true
console.log("year" in car);              // false (deleted earlier)
