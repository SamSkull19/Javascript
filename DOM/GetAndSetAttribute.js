// Select the Movies section by id="field_sec"
const field_section = document.getElementById('field_sec');
console.log(field_section);  
// Logs the entire section element

console.log(field_section.getAttribute('class'));  
// Logs the class attribute of the section

console.log(field_section.getAttribute('id'));     
// Logs the id attribute of the section

console.log(field_section.classList);              
// Logs the DOMTokenList of all classes on the section

// Add a new attribute "title" to the section
field_section.setAttribute('title', 'Movies Field');



// Select the first element with class="sports_name" (the sports list)
const sports_lists = document.getElementsByClassName('sports_name')[0];
console.log(sports_lists);  
// Logs the <ul> element for sports

console.log(sports_lists.getAttribute('class'));  
// Logs the class attribute of the sports <ul>

console.log(sports_lists.getAttribute('id'));     
// Logs the id attribute of the sports <ul>

console.log(sports_lists.classList);              
// Logs the DOMTokenList of all classes on the sports <ul>

// Add a new attribute "title" to the sports list
sports_lists.setAttribute('title', 'Sports Names');



// Select all food list items with class="foods_GG"
const foodNames = document.getElementsByClassName('foods_GG');

// Array of new food names to replace the current ones
const newFoods = ['Vat', 'Daal', 'Ilish', 'Kurma', 'Swarma'];
let i = 0;

// Loop through each food list item and replace the text
for(const food of foodNames){
    food.innerText = newFoods[i];
    i += 1;  
    // Replaces old food names with the newFoods array
}



// Create a new section for games dynamically
const newSection = document.createElement('section');

// Add inner HTML for the new section
newSection.innerHTML = `
    Welcome To See Your Favorite Games List
    <header>Games</header>
    <ul>
        <li class="Games_GG">Valorant</li>
        <li class="Games_GG">CS</li>
        <li class="Games_GG">AC BlackFlag</li>
        <li class="Games_GG">Batman</li>
        <li class="Games_GG">Fallout</li>
    </ul>
`;

// Apply styles to the new section
newSection.style.border = '2px solid black';       // Add black border around the section
newSection.style.padding = '30px';                 // Add padding inside the section
newSection.style.backgroundColor = '#cc7a00';      // Set background color
newSection.style.fontFamily = "'Roboto', sans-serif"; // Set font family
newSection.style.fontWeight = "700";               // Set font weight
newSection.style.fontSize = '50px';               // Set font size for section intro
newSection.style.borderRadius = '30px';           // Round section corners
newSection.style.marginTop = '30px';              // Add spacing above the section



// Append the new section to the body
const body = document.getElementById('main_body');
body.append(newSection);  
// Adds the dynamically created Games section to the page

const gamesGG = document.getElementsByClassName('Games_GG');

// Loop through each games and apply styles
for(const game of gamesGG){
    game.style.fontSize = '30px';                 // Set font size
    game.style.listStyle = 'none';                // Remove bullet points
    game.style.backgroundColor = '#023e26ff';       // Set background color
    game.style.borderRadius = '30px';             // Round corners
    game.style.padding = '20px';                  // Add padding
    game.style.marginTop = '20px';                // Add spacing above each item
    game.style.textAlign = 'center';              // Center text
    game.style.color = 'white';                   // text color
}

