// Using Object Literal (most common)
let person = {
  name: "Sifat",
  age: 23,
  isStudent: true
};

console.log(person);


// Using new Object()
let car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2025;

console.log(car);


// Using Constructor Function
function Student(name, roll) {
  this.name = name;
  this.roll = roll;
}

let student1 = new Student("Samin", 101);
let student2 = new Student("Sarker", 102);

console.log(student1);
console.log(student2);

