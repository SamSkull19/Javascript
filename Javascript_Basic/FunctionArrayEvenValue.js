// Function to get all even numbers from an array
function getEvenNumbers(arr) {
  let evens = []; // array to store even numbers
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num); // add to array if even
    }
  }
  return evens;
}

// Example usage
let numbers = [10, 15, 20, 25, 30, 33, 40];
let evenNumbers = getEvenNumbers(numbers);

console.log("Original Array:", numbers);
console.log("Even Numbers:", evenNumbers);
