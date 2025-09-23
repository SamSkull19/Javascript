// Select the section with id="field_sec" (Movies section)
const field_sec = document.getElementById('field_sec');

// Apply styles to the Movies section
field_sec.style.border = '2px solid black';         // Add black border around the section
field_sec.style.padding = '20px';                   // Add padding inside the section
field_sec.style.backgroundColor = 'aquamarine';    // Set background color
field_sec.style.fontFamily = "'Roboto', sans-serif"; // Set font family
field_sec.style.fontWeight = "600";                // Set font weight



// Select the section with id="field_sec2" (Sports section)
const field_sec2 = document.getElementById('field_sec2');

// Apply styles to the Sports section
field_sec2.style.border = '2px solid black';       // Add black border around the section
field_sec2.style.padding = '30px';                 // Add padding inside the section
field_sec2.style.backgroundColor = '#cc7a00';      // Set background color
field_sec2.style.fontFamily = "'Roboto', sans-serif"; // Set font family
field_sec2.style.fontWeight = "700";               // Set font weight
field_sec2.style.fontSize = '50px';               // Set font size for section intro
field_sec2.style.borderRadius = '30px';           // Round section corners
field_sec2.style.marginTop = '30px';              // Add spacing above the section



// Select the first element with class="sports_section" (header inside Sports section)
const sports_section = document.getElementsByClassName('sports_section')[0];

// Apply styles to the Sports header
sports_section.style.backgroundColor = '#ffe0b3';  // Set background color
sports_section.style.fontSize = '30px';            // Set font size
sports_section.style.padding = '30px';             // Add padding
sports_section.style.borderRadius = '30px';        // Round corners
sports_section.style.marginTop = '30px';           // Add spacing above header



// Select all sports list items with class="sports_GG"
const sports = document.getElementsByClassName('sports_GG');

// Loop through each sport and apply styles
for(const sport of sports){
    sport.style.fontSize = '30px';                 // Set font size
    sport.style.listStyle = 'none';                // Remove bullet points
    sport.style.backgroundColor = '#1affa3';       // Set background color
    sport.style.borderRadius = '30px';             // Round corners
    sport.style.padding = '20px';                  // Add padding
    sport.style.marginTop = '20px';                // Add spacing above each item
    sport.style.textAlign = 'center';              // Center text
}



// Select the section with id="field_sec3" (Food section)
const field_sec3 = document.getElementById('field_sec3');

// Apply styles to the Food section
field_sec3.style.border = '2px solid black';       // Add black border
field_sec3.style.padding = '30px';                 // Add padding inside the section
field_sec3.style.backgroundColor = '#1a66ff';      // Set background color
field_sec3.style.fontFamily = "'Roboto', sans-serif"; // Set font family
field_sec3.style.fontWeight = "700";               // Set font weight
field_sec3.style.fontSize = '50px';               // Set font size for section intro
field_sec3.style.borderRadius = '30px';           // Round section corners
field_sec3.style.marginTop = '30px';              // Add spacing above the section



// Select the first element with class="food_section" (header inside Food section)
const food_section = document.getElementsByClassName('food_section')[0];

// Apply styles to the Food header
food_section.style.backgroundColor = '#d279a6';    // Set background color
food_section.style.fontSize = '30px';              // Set font size
food_section.style.padding = '30px';               // Add padding
food_section.style.borderRadius = '30px';          // Round corners
food_section.style.marginTop = '30px';             // Add spacing above header



// Select all food list items with class="foods_GG"
const foods = document.getElementsByClassName('foods_GG');

// Loop through each food item and apply styles
for(const food of foods){
    food.style.fontSize = '30px';                   // Set font size
    food.style.listStyle = 'none';                  // Remove bullet points
    food.style.backgroundColor = '#1affa3';         // Set background color
    food.style.borderRadius = '30px';               // Round corners
    food.style.padding = '20px';                    // Add padding
    food.style.marginTop = '20px';                  // Add spacing above each item
    food.style.textAlign = 'center';                // Center text
}
