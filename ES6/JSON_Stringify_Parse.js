// Define a student object with multiple types of properties: strings, numbers, arrays, and nested objects
const student = {
    name: "Sifat Samin",
    age: 22,
    courses: ["Web Development", "Data Structures", "AI Fundamentals"], // Array of courses
    address: { // Nested object for address
        street: "123 College Road",
        city: "Sylhet",
        country: "Bangladesh"
    },
    marks: { // Nested object for marks
        semester1: [85, 90, 88],
        semester2: [92, 89, 95]
    }
};

// Log the entire student object
console.log(student);

// Optional chaining to safely access the courses array
console.log(student?.courses);

// Optional chaining to safely access the street from the address object
console.log(student?.address?.street);

// Safely access semester1 marks using optional chaining
const marks = student?.marks?.semester1;

// Loop through the marks array and print each mark
marks.forEach(mark => console.log(`Subject 1 mark : ${mark}`));

// Convert the student object to a JSON string
const newStudent = JSON.stringify(student);
console.log(newStudent); // JSON string representation

// Parse the JSON string back to a JavaScript object
const newObjStudent = JSON.parse(newStudent);
console.log(newObjStudent); // Original object restored

// Directly create a JSON string for a student object
const jsonStudentData = JSON.stringify({
    "name": "Sifat Samin",
    "age": 22,
    "courses": ["Web Development", "Data Structures", "AI Fundamentals"],
    "address": {
        "street": "123 College Road",
        "city": "Sylhet",
        "country": "Bangladesh"
    },
    "marks": {
        "semester1": [85, 90, 88],
        "semester2": [92, 89, 95]
    }
});

// Log the JSON string
console.log(jsonStudentData);

// Parse the JSON string back into a JavaScript object
const jsonObjStudent = JSON.parse(jsonStudentData);
console.log(jsonObjStudent); // Restored object from JSON
