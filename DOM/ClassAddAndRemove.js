// Select all <section> elements on the page
const sections = document.querySelectorAll('section');

// Loop through each section and apply styles
for(const section of sections){
    section.style.border = '2px solid steelblue';  // Add a steel blue border
    section.style.margin = '20px';                 // Add margin around each section
    section.style.padding = '20px';                // Add padding inside each section
    section.style.fontSize = '50px';               // Increase font size of text
    section.style.borderRadius = '50px';           // Round the corners of each section
}



// Select the Movies section by id="field_sec"
const field = document.getElementById('field_sec');

// Add new CSS classes to this section
field.classList.add('coralBG');   // Custom background class (defined in CSS)
field.classList.add('plant');     // Another class (can add extra styles)



// Select the Sports section by id="field_sec2"
const field2 = document.getElementById('field_sec2');

// Add multiple CSS classes to the sports section
field2.classList.add('kinBridge');   // Add custom style class
field2.classList.add('borderBlue');  // Add class that likely adds blue border
field2.classList.add('bgLime');      // Add lime background color



// Select the Foods section by id="field_sec3"
const field3 = document.getElementById('field_sec3');

// Add same classes as Sports section
field3.classList.add('kinBridge');
field3.classList.add('borderBlue');
field3.classList.add('bgLime');

// Remove those same classes immediately (so they don’t apply finally)
field3.classList.remove('kinBridge');
field3.classList.remove('borderBlue');
field3.classList.remove('bgLime');
