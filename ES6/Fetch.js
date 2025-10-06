// https://jsonplaceholder.typicode.com/todos/1

// fetch is used to request data from a server (API)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then() runs after the fetch request succeeds
    .then((res) => res.json()) 
    // res.json() converts the response into a JavaScript object (JSON → JS)
    .then((data) => console.log(data)) 
    // data now contains the actual data from the API and is logged to the console

// Adding a click event to a button with id 'loadData'
document.getElementById('loadData').addEventListener('click', () => {
    // When the button is clicked, fetch data from the API again
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        // Convert the response to a JavaScript object
        .then(res => res.json())
        // Use the data (here, just print it to the console)
        .then(data => console.log(data));
});

/*
Summary of fetch process:
1. fetch(url)
    fetch is a built-in JavaScript function used to request data from a server (API).
    Here, you’re requesting data from 'https://jsonplaceholder.typicode.com/todos/1'.
    fetch returns a Promise, which means it will complete in the future when the data is available.

2. .then((res) => res.json())
    .then() runs after the fetch request succeeds.
    res is the response object from the server.
    res.json() converts the response into a JavaScript object (JSON → JS).
    res.json() also returns a Promise because parsing might take time.

3. .then((data) => console.log(data))
    This .then() runs after the JSON is ready.
    data now contains the actual data from the API in object format.
    console.log(data) prints it to the console.
*/
