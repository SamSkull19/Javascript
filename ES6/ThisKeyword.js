class Student {
    constructor(fname, lname, roll) {
        // 'this' refers to the new object being created
        this.fname = fname;
        this.lname = lname;
        this.roll = roll;
    }

    // Using 'this' to access instance properties
    getFullName() {
        return this.fname + " " + this.lname;
    }

    // Example method chaining
    showInfo() {
        return `Name: ${this.getFullName()} | Roll: ${this.roll}`;
    }
}

// Create object
const student1 = new Student("Sifat", "Samin", 101);

console.log(student1.getFullName()); // Sifat Samin
console.log(student1.showInfo());    // Name: Sifat Samin | Roll: 101
