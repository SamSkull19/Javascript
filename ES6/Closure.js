function sum(){
    // Initialize a variable 'count' inside the outer function's scope
    // This variable will be private to the inner function (closure)
    let count = 0;

    // Return an inner function that has access to 'count'
    return function (){
        // Each time the inner function is called, increase 'count' by 1
        count++;
        // Print the current value of 'count'
        console.log(count);
    }
}

// 'sum()' is called once, creating a closure with its own 'count' variable
const result = sum();

// Each call to 'result()' increments and logs the same 'count' variable
result(); // 1
result(); // 2
result(); // 3
result(); // 4
result(); // 5
result(); // 6

// Calling 'sum()' again creates a new closure with a new 'count' variable
const result2 = sum();

// 'result2()' has its own independent 'count'
result2(); // 1
result2(); // 2
result2(); // 3
result2(); // 4
