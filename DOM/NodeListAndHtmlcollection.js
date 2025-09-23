// ==================== NodeList Example ====================

// Select all list items inside movies section by class name
const movieItems = document.querySelectorAll('.movies_GG');
console.log(movieItems); 
// querySelectorAll returns a NodeList (similar to an array, but not a true array)

// Loop through the NodeList and log each movie's text
for(const movie of movieItems){
    console.log(movie.innerText);   // Logs: Thor, Iron Man, Spider Man, etc.
}


// ==================== HTMLCollection Example ====================

// Select all sports items using getElementsByClassName
const sportsItems = document.getElementsByClassName('sports_GG');
console.log(sportsItems); 
// getElementsByClassName returns an HTMLCollection (similar to NodeList, but *live-updating* if DOM changes)

// Loop through the HTMLCollection
for(const sport of sportsItems){
    console.log(sport.innerText);   // Logs: Cricket, Football, etc.
}


// ==================== parentNode Example ====================

// Select the first movie item
const firstMovie = document.querySelector('.movies_GG');

// Get its parent <ul> (movie_list)
console.log(firstMovie.parentNode);  
// Logs the <ul id="movie_list"> element


// ==================== childNodes Example ====================

// Select the movie list <ul>
const movieList = document.getElementById('movie_list');

// Log all childNodes (includes elements + text nodes like whitespace/newlines)
console.log(movieList.childNodes);

// Access only the first <li> (index 1 because index 0 is a text node)
console.log(movieList.childNodes[1]);  
console.log(movieList.childNodes[1].innerText);  // Logs "Thor"

// Access other child nodes
console.log(movieList.childNodes[2]);            // Logs #text (whitespace)
console.log(movieList.childNodes[3]);            // Logs <li>Iron Man</li>
console.log(movieList.childNodes[3].innerText);  // Logs "Iron Man"
console.log(movieList.childNodes[4]);            // Logs #text
console.log(movieList.childNodes[5]);            // Logs <li>Spider Man</li>
console.log(movieList.childNodes[5].innerText);  // Logs "Spider Man"


// ==================== createElement Example ====================

// Create a new <li> element
const newMovie = document.createElement('li');

// Add text inside the new <li>
newMovie.innerText = 'Creed';

// Add same CSS class as other movies
newMovie.classList.add('movies_GG');

// Append the new <li> to the end of the movie list
movieList.appendChild(newMovie);
