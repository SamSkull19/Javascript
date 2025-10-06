// Using fetch with Promises and .then()/.catch()

// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/comments')
    // Convert the response to a JavaScript object (JSON → JS)
    .then(res => res.json())
    // Use the data (here, log it to the console)
    .then(data => console.log(data))
    // Handle any errors that occur during fetch or JSON parsing
    .catch(error => console.log('Error Occurred : ', error));



// Using async/await to fetch data
const dataLoad = async () => {
    // await pauses execution until the fetch is complete
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    // Convert response to JavaScript object
    const data = await res.json();
    // Log the data
    console.log(data);
}

// Call the async function
dataLoad();



// Using async/await with try/catch for error handling
const dataLoadTryCatch = async () => {
    try {
        // Attempt to fetch data from API
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        // Log the data if successful
        console.log(data);
    }
    catch{
        // If any error occurs during fetch or JSON parsing, catch block runs
        console.log("Error Occurred");
    }
}

// Call the async function with error handling
dataLoadTryCatch();


/*
Summary:

1. fetch() with .then()/.catch()
   - Uses Promises to handle async operations
   - .then() runs after fetch/JSON parsing succeeds
   - .catch() handles errors

2. async/await
   - Makes async code look like synchronous code
   - 'await' waits for the fetch or JSON parsing to complete
   - Easier to read and chain

3. try/catch with async/await
   - Handles errors gracefully in async functions
   - Any error in try block is caught in catch block
*/
