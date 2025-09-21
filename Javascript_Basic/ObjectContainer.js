// Object containing multiple data types
let person = {
  // Primitive types
  name: "Sifat",        // string
  age: 23,              // number
  isStudent: true,      // boolean
  grade: null,          // null
  certificate: undefined, // undefined

  // Array
  hobbies: ["Reading", "Coding", "Gaming"],

  // Nested Object
  address: {
    city: "Sylhet",
    country: "Bangladesh",
    zip: 3100
  },

  // Function
  greet: function() {
    return `Hello, my name is ${this.name}`;
  },

  // Another function using arrow (note: arrow functions do not have their own 'this')
  showHobbies: () => "I like multiple hobbies",

  // Date object
  birthDate: new Date("2002-05-15"),

  // Regular Expression
  pattern: /^[A-Za-z]+$/,

  // Symbol
  id: Symbol("uniqueId"),

  // Nested array of objects
  courses: [
    { name: "CSE101", score: 95 },
    { name: "CSE202", score: 88 }
  ]
};

// Accessing different types
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Is Student:", person.isStudent);
console.log("Hobbies:", person.hobbies);
console.log("City:", person.address.city);
console.log("Greet Function:", person.greet());
console.log("Arrow Function:", person.showHobbies());
console.log("Birth Date:", person.birthDate);
console.log("Regex Pattern:", person.pattern);
console.log("Symbol ID:", person.id);
console.log("First Course Name:", person.courses[0].name);
