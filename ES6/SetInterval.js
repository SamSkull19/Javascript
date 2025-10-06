// Counter variable for first interval
let p = 0;

// setInterval schedules a function to run repeatedly every 3 seconds (3000 ms)
setInterval(() => {
    p++;  // Increment counter
    console.log("Parse Data : ", p);  // Log the current value of p
}, 3000);

// Counter variable for second interval
let count = 0;

// Another setInterval that runs every 2 seconds (2000 ms)
setInterval(() => {
    count++;  // Increment counter
    console.log("Execution : ", count);  // Log the current value of count
}, 2000);

// Counter variable for third interval
let cnt = 0;

// Assign the interval ID to a variable so we can clear it later
const clockId = setInterval(() => {
    cnt++;  // Increment counter
    console.log("Proceed : ", count);  // Log the value of count (from second interval)

    // Stop this interval after 10 executions
    if(cnt === 10){
        clearInterval(clockId);  // Stops the repeated execution of this interval
        console.log("Third interval stopped after 10 executions");
    }
}, 1000);

/*
----------------------------------------
Explanation:

1. setInterval(function, delay)
   - Runs the specified function repeatedly every 'delay' milliseconds.
   - Returns an interval ID, which can be used with clearInterval() to stop it.

2. clearInterval(intervalId)
   - Stops a running interval using the interval ID returned by setInterval.

3. Execution Details:
   - First interval ("Parse Data") runs every 3 seconds.
   - Second interval ("Execution") runs every 2 seconds.
   - Third interval ("Proceed") runs every 1 second and stops automatically after 10 executions.

4. Notes:
   - All intervals run independently.
   - JavaScript schedules intervals asynchronously, so console logs appear according to their delays.
----------------------------------------
*/
