// Sample object
const user = {
    name: "Sifat",
    age: 23,
    country: "Bangladesh"
};

// ===============================
// Object.keys()
// ===============================
// Returns array of keys
console.log("Keys:", Object.keys(user));
// ["name", "age", "country"]


// ===============================
// Object.values()
// ===============================
// Returns array of values
console.log("Values:", Object.values(user));
// ["Sifat", 23, "Bangladesh"]


// ===============================
// Object.entries()
// ===============================
// Returns array of [key, value] pairs
console.log("Entries:", Object.entries(user));
// [["name", "Sifat"], ["age", 23], ["country", "Bangladesh"]]

// Looping entries
for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}


// ===============================
// delete operator
// ===============================
// Removes a property from object
delete user.age;
console.log("After delete age:", user);
// { name: "Sifat", country: "Bangladesh" }


// ===============================
// Object.seal()
// ===============================
// Prevents adding/removing properties but allows modifying existing ones
const sealedUser = { name: "Rafi", age: 22 };
Object.seal(sealedUser);

sealedUser.age = 23;       // Allowed (modify existing)
sealedUser.city = "Dhaka"; // Not allowed (add new)
delete sealedUser.name;    // Not allowed (delete)
console.log("Sealed user:", sealedUser);
// { name: "Rafi", age: 23 }


// ===============================
// Object.freeze()
// ===============================
// Prevents adding, removing, or modifying properties (fully immutable)
const frozenUser = { name: "Nabil", age: 24 };
Object.freeze(frozenUser);

frozenUser.age = 25;       // Not allowed
frozenUser.city = "Sylhet"; // Not allowed
delete frozenUser.name;    // Not allowed
console.log("Frozen user:", frozenUser);
// { name: "Nabil", age: 24 }
