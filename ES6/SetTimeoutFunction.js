
// Schedules a message to print after 3 seconds (3000 ms)
setTimeout(() => {
    console.log('This Text is going to be printed in 3 seconds');
}, 3000);

// Schedules a message to print after 1 second (1000 ms)
// This one will appear first because it has the shortest delay
setTimeout(() => {
    console.log('This Text is going to be printed in 1 seconds');
}, 1000);

// Schedules a message to print after 5 seconds (5000 ms)
// Using a traditional function syntax
setTimeout(function(){
    console.log('This Text is going to be printed in 5 seconds');
}, 5000);

// Define a named function
function print7(){
    console.log('This Text is going to be printed in 7 seconds');
}
// Pass the function name (no parentheses) to setTimeout
// This message will appear after 7 seconds
setTimeout(print7, 7000);

// Define an arrow function and store it in a variable
const print4 = () => {
    console.log('This Text is going to be printed in 4 seconds');
};
// Call the function after 4 seconds
setTimeout(print4, 4000);

// Pass extra arguments to setTimeout
// The 3rd parameter ('This Text...') is automatically passed to the callback function
const print6 = text => console.log(text);
setTimeout(print6, 6000, 'This Text is going to be printed in 6 seconds');

// ==============================
// Using clearTimeout() to cancel a timer
// ==============================

// Define an arrow function that takes text input and logs it
const print2 = text => console.log(text);

// Schedule the function to run after 2 seconds
const timer2 = setTimeout(print2, 2000, 'This Text is going to be printed in 2 seconds');

// Immediately cancel the timer before it executes
clearTimeout(timer2); // This prevents "print2" from running

/*
Explanation:
- setTimeout() schedules a function to run later and returns a timer ID.
- clearTimeout(timerID) cancels that scheduled timer before it runs.

In this case:
- "timer2" holds the ID of the 2-second timer.
- clearTimeout(timer2) stops it right away.
- Therefore, the 2-second message never prints.

Final Execution Order (approx):
1. (1s)  → "This Text is going to be printed in 1 seconds"
2. (3s)  → "This Text is going to be printed in 3 seconds"
3. (4s)  → "This Text is going to be printed in 4 seconds"
4. (5s)  → "This Text is going to be printed in 5 seconds"
5. (6s)  → "This Text is going to be printed in 6 seconds"
6. (7s)  → "This Text is going to be printed in 7 seconds"
2-second message is skipped because clearTimeout() canceled it.
*/
