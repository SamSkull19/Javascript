// ==============================
// Example 1: Using fetch with .then()
// ==============================
const loadData = () => {
    // These logs are synchronous and execute immediately
    console.log('Number One Executed');
    console.log('Number Two Executed');
    console.log('Number Third Executed');

    // fetch() is asynchronous and returns a Promise
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())  // Parse response to JSON (also returns a Promise)
        .then(data => console.log(data)) // Log the fetched data when Promise resolves
        .catch(e => console.log(e))      // Handle any errors

    // This code executes immediately after calling fetch, without waiting
    const x = 10 + 10;
    console.log('Sum : ', x);
    console.log('Number Four Executed');
    console.log('Number Five Executed');
    console.log('Number Six Executed');
}

// Call the function
loadData();

// ==============================
// Example 2: Using async/await
// ==============================
const loadDataAsync = async () => {
    // Synchronous logs execute first
    console.log('Number One Executed');
    console.log('Number Two Executed');
    console.log('Number Third Executed');

    try {
        // await pauses execution of this async function until the Promise resolves
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data); // Logs the fetched data
    }
    catch{
        console.log("Error"); // Catches any fetch or JSON parsing errors
    }

    // Execution resumes after the await
    const x = 10 + 10;
    console.log('Sum : ', x);
    console.log('Number Four Executed');
    console.log('Number Five Executed');
    console.log('Number Six Executed');
}

// Call the async function
loadDataAsync();

// ==============================
// Example 3: Simple async function
// ==============================
async function newLoadData(){
    // Await pauses until fetch and json parsing is complete
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
}

// Call the function
newLoadData();

/*
----------------------------------------
Explanation:

1. loadData():
   - Demonstrates traditional fetch with .then() chaining.
   - The code after fetch runs immediately (asynchronous behavior).
   - Data logs appear after the fetch Promise resolves.

2. loadDataAsync():
   - Demonstrates async/await syntax for handling asynchronous code.
   - await pauses execution within the function until the Promise resolves.
   - Makes asynchronous code look synchronous and easier to read.
   - Errors can be handled with try/catch.

3. newLoadData():
   - Minimal async function to fetch data using async/await.

Key Points:
- fetch() returns a Promise.
- .then() is used to handle resolved Promises.
- async/await makes Promises easier to work with.
- Code outside of fetch or await continues executing immediately.
---------------------------------------- 
*/
