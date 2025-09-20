let person = {
  name: "Sifat",
  age: 23,
  dept: "CSE"
};

// for...in loop (classic way) 
console.log("// for...in loop");
for (let key in person) {
  console.log(key, ":", person[key]);
}

// Object.entries() + for...of
console.log("// Object.entries() + for...of");
for (let [key, value] of Object.entries(person)) {
  console.log(key, ":", value);
}

// for...of with Object.keys()
console.log("// for...of with Object.keys()");
for (let key of Object.keys(person)) {
  console.log(key, ":", person[key]);
}

// for...of with Object.values()
console.log("// for...of with Object.values()");
for (let value of Object.values(person)) {
  console.log("Value:", value);
}
