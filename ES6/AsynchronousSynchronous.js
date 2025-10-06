console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

setTimeout(() => {
    console.log("Task 4 (after 4 seconds)");
}, 2000);

console.log("Task 5");



/*

Synchronous
    Code runs one line at a time, in order.
    JavaScript waits for one line to finish before moving to the next.
    It’s blocking — if one task takes time, others must wait.

Asynchronous
    Code does not wait for the previous line to finish.
    JavaScript can start a task and then move on to the next line while waiting for the result.
    It’s non-blocking — multiple things can happen at once.

*/