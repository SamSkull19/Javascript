// Define a class named Student
class Student {
    // Constructor method is called automatically when creating a new object
    constructor(fname, lname, roll, className, section) {
        // Assign constructor parameters to instance properties
        this.fname = fname;          // First name of the student
        this.lname = lname;          // Last name of the student
        this.roll = roll;            // Roll number of the student
        this.className = className;  // Class name (e.g., Class-10)
        this.section = section;      // Section (e.g., SEC-A)
    }

    // Method that returns a formatted string with student details
    studentInfo() {
        return `Name : ${this.fname} ${this.lname} | Roll No. ${this.roll} | Class : ${this.className} | Section : ${this.section}`;
    }
}

// Create multiple student objects with different details
const student1 = new Student("Sifat", "Samin", 101, "Class-10", "SEC-A");
const student2 = new Student("Alice", "Johnson", 105, "Class-8", "SEC-C");
const student3 = new Student("Bob", "Smith", 108, "Class-9", "SEC-B");

// Log the full objects to the console
console.log(student1); // Shows Student { fname: 'Sifat', lname: 'Samin', roll: '101', className: 'Class-10', section: 'SEC-A' }
console.log(student2); // Shows Student { fname: 'Alice', lname: 'Johnson', roll: '105', className: 'Class-8', section: 'SEC-C' }
console.log(student3); // Shows Student { fname: 'Bob', lname: 'Smith', roll: '108', className: 'Class-9', section: 'SEC-B' }

// Call the method studentInfo() for each student to display formatted information
console.log(student1.studentInfo()); // Name : Sifat Samin | Roll No. 101 | Class : Class-10 | Section : SEC-A
console.log(student2.studentInfo()); // Name : Alice Johnson | Roll No. 105 | Class : Class-8 | Section : SEC-C
console.log(student3.studentInfo()); // Name : Bob Smith | Roll No. 108 | Class : Class-9 | Section : SEC-B
