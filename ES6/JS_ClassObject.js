// Define a class named Student
class Student {
    // Public class fields (these will be properties of each instance)
    fname = "Sifat";   // First name property
    lname = "Samin";   // Last name property

    // Method inside the class that merges the first and last name
    nameMerge() {
        // Use 'this' keyword to refer to properties of the current object
        return this.fname + " " + this.lname;
    }
}

// Create a new instance of the Student class
const student = new Student();

// Log the entire object. This will show the class fields and their values.
console.log(student); 
// Output: Student { fname: 'Sifat', lname: 'Samin' }

// Access and log the 'fname' property directly
console.log(student.fname); 
// Output: Sifat

// Access and log the 'lname' property directly
console.log(student.lname); 
// Output: Samin

// Call the nameMerge() method to get the full name
console.log(student.nameMerge()); 
// Output: Sifat Samin
