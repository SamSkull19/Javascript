// Function to sum all numbers using for...of
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num; // add each element to sum
  }
  return sum;
}

// Example usage
let numbers = [10, 20, 30, 40, 50];
let total = sumArray(numbers);

console.log("Array:", numbers);
console.log("Sum of all numbers:", total); // 150
