// Function to check odd or even
function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even";  // if divisible by 2
  }
  return "Odd";      // otherwise odd
}

// Store return values in variables
let result1 = checkOddEven(10);
let result2 = checkOddEven(7);

console.log("10 is:", result1); // Even
console.log("7 is:", result2);  // Odd
