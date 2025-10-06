// Import named exports
import { PI, add } from './mathExport.js';

// Import default export
import multiply from './mathExport.js';

console.log("PI : ", PI);            // PI: 3.14159
console.log("Add : ", add(2, 3));    // Add: 5
console.log("Multiply : ", multiply(2, 3));   // Multiply: 6
