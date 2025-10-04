// Create a 3D array (array of arrays of arrays)
const numbers = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [ 
    [7, 8, 9],
    [10, 11, 12]
  ],
  [ 
    [13, 14, 15],
    [16, 17, 18]
  ]
];

console.log(numbers); // Original 3D array

// Flatten by 1 level (3D → 2D)
const flatNumbers = numbers.flat();
console.log(flatNumbers); // [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]]

// Flatten by 2 levels (3D → 1D)
const flatNumbers2 = numbers.flat(2);
console.log(flatNumbers2); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

// Flatten completely using Infinity depth
const flatNumbers3 = numbers.flat(Infinity);
console.log(flatNumbers3); // Same as above, completely flat

// Another 3D array for flatMap examples
const numbers2D = [
  [
    [1, 2, 3],
    [4, 5, 6]
  ],
  [ 
    [7, 8, 9],
    [10, 11, 12]
  ]
]

// flatMap flattens **one level** while mapping
const flatMapNumbers = numbers2D.flatMap(x => x); 
console.log(flatMapNumbers); // Flatten 1 level → [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]

// Apply flatMap again to flatten another level
const flatMapNumbers2 = flatMapNumbers.flatMap(x => x); 
console.log(flatMapNumbers2); // Flattened 2 levels → [1,2,3,4,5,6,7,8,9,10,11,12]

// Use flatMap to **duplicate each number** (map + flatten 1 level)
const flatMapNumbers3 = flatMapNumbers2.flatMap(x => [x, x * 2]); 
console.log(flatMapNumbers3); 
// Output: [1,2,2,4,3,6,4,8,...] each number and its double

// Flatten the entire 3D array completely using flat(Infinity)
const flatNum = numbers2D.flat(Infinity); 
console.log(flatNum); // [1,2,3,4,5,6,7,8,9,10,11,12]

// Duplicate each number using flatMap after full flattening
const flatNum2 = flatNum.flatMap(x => [x, x * 2]); 
console.log(flatNum2); 
// Output: [1,2,2,4,3,6,...] same as above
