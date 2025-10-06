// ==============================
// Example 1: Basic Promise usage
// ==============================

const fetchData = () => {
    // Return a new Promise object
    return new Promise((resolve, reject) => {
        const status = true;  // mock status (true = success, false = failure)

        // If status is true, resolve the promise with data
        if(status){
            resolve({name:'Samin', age:'24'});  // fulfilled promise (success)
        }
        else{
            reject("Server Error");  // rejected promise (error)
        }
    })
}

// This logs the function itself, not its result
console.log(fetchData);  // Output: [Function: fetchData]

// Call the function that returns a Promise
fetchData()
    .then(res => console.log(res))   // runs if promise is resolved (fulfilled)
    .catch(error => console.log(error));  // runs if promise is rejected (failed)

// Expected output:
// { name: 'Samin', age: '24' }


// ==============================
// Example 2: Simulating real API behavior
// ==============================

const fetchNewData = () => {
    return new Promise((resolve, reject) => {
        const status = true;  // mock server status

        if(status){
            // Simulate a "response" object like what fetch() returns
            const mockData = {
                // A 'json()' method that itself returns a Promise (like fetch API)
                json: () => Promise.resolve({
                    name: 'Samin',
                    age: 24,
                    department: "CSE"
                })
            }
            // Resolve the main Promise with the mock response
            resolve(mockData);
        }
        else{
            // Reject the Promise if "status" is false
            reject("Server Error");
        }
    })
}

// Using the mock fetch function
fetchNewData()
    .then(res => res.json())  // 'res' is the mock response object → call its json() method
    .then(data => console.log(data))  // 'data' is the resolved JSON object
    .catch(e => console.log(e));  // handles any error (from reject or JSON failure)

// Expected output:
// { name: 'Samin', age: 24, department: 'CSE' }

/*
----------------------------------------
Explanation:
----------------------------------------

fetchData():
   - Mimics a basic Promise that resolves immediately with user data.
   - If status = false, it triggers the reject() method.

fetchNewData():
   - Simulates how the real fetch() API works.
   - The real fetch() doesn’t give you data directly.
     Instead, it gives you a response object containing a `.json()` method.
   - The `.json()` method itself returns another Promise
     that resolves with the actual data.

.then() chaining:
   - The first .then() handles the first Promise (res → response).
   - The second .then() handles the Promise returned by res.json().
   - .catch() handles any error from any stage in the chain.

----------------------------------------
Summary of Promise flow:

Promise States:
→ Pending  → Fulfilled (resolve) OR Rejected (reject)

Methods:
→ .then() runs when resolved
→ .catch() runs when rejected
→ .finally() runs no matter what

fetchNewData() mimics the behavior of a real fetch API request.
----------------------------------------
*/
