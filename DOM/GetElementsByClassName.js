// Select all elements with class="movies_GG"
const movies = document.getElementsByClassName('movies_GG');
console.log(movies);  
// Logs HTMLCollection of all movie list items

// Loop through each movie item and apply styles
for(const movie of movies){
    console.log(movie.innerText);  
    // Logs the text inside each <li> (e.g., Thor, Iron Man)

    movie.style.border = '1px solid blue';     // Add blue border around each item
    movie.style.marginTop = '10px';            // Add spacing above each item
    movie.style.padding = '10px';              // Add padding inside each item
    movie.style.borderRadius = '10px';         // Round corners
    movie.style.textAlign = 'center';          // Align text to center
    movie.style.fontSize = '50px';             // Increase font size
}



// Select all elements with class="sports_GG"
const sports = document.getElementsByClassName('sports_GG');
console.log(sports);  
// Logs HTMLCollection of all sports list items

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



// Select the first element with class="sports_section_intro"
const sportHead = document.getElementsByClassName('sports_section_intro')[0];

// Select the first element with class="sports_section"
const sportSubHead = document.getElementsByClassName('sports_section')[0];

// Apply styles to sports section headings
sportHead.style.fontSize = '50px';     // Main heading size
sportSubHead.style.fontSize = '40px';  // Subheading size



// Select all elements with class="food_section_intro"
const foodHead = document.getElementsByClassName('food_section_intro');

// Select all elements with class="food_section"
const foodSubHead = document.getElementsByClassName('food_section');

// Loop through each food heading and set font size
for(const food of foodHead){
    food.style.fontSize = '50px';
}

// Loop through each food subheading and set font size
for(const food of foodSubHead){
    food.style.fontSize = '40px';
}



// Select all elements with class="foods_GG"
const foods = document.getElementsByClassName('foods_GG');
console.log(foods);  
// Logs HTMLCollection of all food list items

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
