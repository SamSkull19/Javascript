// Create an object
const person = { name: "Nabil", age: 24 };
console.log(person); 
// Output: { name: "Nabil", age: 24 }

// Copy 'person' into a new object using Object.assign
const newPerson = Object.assign({}, person);
console.log(newPerson); 
// Output: { name: "Nabil", age: 24 }

// Compare references (not values)
console.log(person === newPerson); 
// Output: false because they are two different objects in memory

// Create two separate objects
const obj1 = { name: "Sifat", age: 24 };
const obj2 = { country: "Bangladesh", age: 23 };

// Merge obj1 and obj2 into a new object
const merged = Object.assign({}, obj1, obj2);
console.log(merged); 
// Output: { name: "Sifat", age: 23, country: "Bangladesh" }
// Note: 'age' from obj2 overwrites 'age' from obj1

// Merge in reverse order (obj2 first, then obj1)
const merged2 = Object.assign({}, obj2, obj1);
console.log(merged2); 
// Output: { country: "Bangladesh", age: 24, name: "Sifat" }
// Note: 'age' from obj1 overwrites 'age' from obj2 this time

// Merge obj2 directly INTO obj1 (modifies obj1)
const merged3 = Object.assign(obj1, obj2);
console.log(merged3); 
// Output: { name: "Sifat", age: 23, country: "Bangladesh" }
// Now obj1 is permanently changed since it was used as the target
