// Select all elements with class="movies_GG"
const movies = document.querySelectorAll('.movies_GG');
console.log(movies);  
// Logs a NodeList of all movie list items

// Loop through each movie item and apply styles
for(const movie of movies){
    console.log(movie);  
    // Logs the entire <li> element (e.g., <li class="movies_GG">Thor</li>)

    movie.style.border = '1px solid blue';     // Add blue border around each item
    movie.style.marginTop = '10px';            // Add spacing above each item
    movie.style.padding = '10px';              // Add padding inside each item
    movie.style.borderRadius = '10px';         // Round corners
    movie.style.textAlign = 'center';          // Align text to center
    movie.style.fontSize = '50px';             // Increase font size
}



// Select all elements with class="sports_GG"
const sports = document.querySelectorAll('.sports_GG');
console.log(sports);  
// Logs a NodeList of all sports list items

// Loop through each sports item and apply styles
for(const sport of sports){
    console.log(sport.innerText);  
    // Logs the text inside each <li> (e.g., Cricket, Football)

    sport.style.border = '1px solid blue';     // Add blue border around each item
    sport.style.marginTop = '10px';            // Add spacing above each item
    sport.style.padding = '10px';              // Add padding inside each item
    sport.style.borderRadius = '10px';         // Round corners
    sport.style.textAlign = 'center';          // Align text to center
    sport.style.fontSize = '50px';             // Increase font size
    sport.style.listStyle = 'none';            // Remove bullet points
}



// Select the section with id="field_sec2"
const sportHead = document.querySelector('#field_sec2');

// Select the first element with class="sports_section"
const sportSubHead = document.querySelector('.sports_section');

// Apply styles to sports section headings
sportHead.style.fontSize = '50px';     // Main heading size (section intro text)
sportSubHead.style.fontSize = '40px';  // Subheading size (Movies heading)



// Select the section with id="field_sec3"
const foodHead = document.querySelector('#field_sec3');

// Select the first element with class="food_section"
const foodSubHead = document.querySelector('.food_section');

// Apply styles to food section headings
foodHead.style.fontSize = '50px';      // Main heading size (section intro text)
foodSubHead.style.fontSize = '40px';   // Subheading size (Movies heading)



// Select all elements with class="foods_GG"
const foods = document.querySelectorAll('.foods_GG');
console.log(foods);  
// Logs a NodeList of all food list items

// Loop through each food item and apply styles
for(const food of foods){
    console.log(food.innerText);  
    // Logs the text inside each <li> (e.g., Biriyani, Kacchi)

    food.style.border = '1px solid blue';     // Add blue border around each item
    food.style.marginTop = '10px';            // Add spacing above each item
    food.style.padding = '10px';              // Add padding inside each item
    food.style.borderRadius = '10px';         // Round corners
    food.style.textAlign = 'center';          // Align text to center
    food.style.fontSize = '50px';             // Increase font size
    food.style.listStyle = 'none';            // Remove bullet points
}
