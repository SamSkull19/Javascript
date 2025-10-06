// Define a function that logs immediately when called
const personKarim = () => console.log('My Name is Karim');

// Another immediate logging function
const personRahim = () => console.log('My Name is Rahim');

// Define a function that logs after a 2-second delay using setTimeout (asynchronous)
const personJarim = () => { 
    setTimeout(() => {
        console.log('My Name is Jahim');
    }, 2000); // waits 2 seconds before printing
};

// Another immediate logging function
const personMarim = () => console.log('My Name is Marim');

// Another function with a 2-second delay (asynchronous)
const personSarim = () => { 
    setTimeout(() => {
        console.log('My Name is Sarim');
    }, 2000); // waits 2 seconds before printing
};

// Another immediate logging function
const personWarim = () => console.log('My Name is Warim');


// Function calls
personKarim();  // Runs immediately
personRahim();  // Runs immediately
personJarim();  // Runs after 2 seconds
personMarim();  // Runs immediately
personSarim();  // Runs after 2 seconds
personWarim();  // Runs immediately

/*
Explanation:
- Functions with console.log() run synchronously — one after another in order.
- Functions using setTimeout() run asynchronously — JavaScript sets a timer 
  and continues executing other code without waiting.
- After 2 seconds, both personJarim() and personSarim() messages appear together.
*/
