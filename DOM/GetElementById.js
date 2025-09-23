// Select the <ul> element with id="movie_list"
movies = document.getElementById('movie_list');
console.log(movies);  
// Logs the entire <ul> element for movies

console.log(movies.innerHTML);  
// Logs all child elements (list items) inside the <ul> as HTML

console.log(movies.innerText);  
// Logs only the text content of the movie list


// Select the <ul> element with id="sports_list"
sports = document.getElementById('sports_list');
console.log(sports);  
// Logs the entire <ul> element for sports

console.log(sports.innerHTML);  
// Logs all child elements (list items) inside the <ul> as HTML

console.log(sports.innerText);  
// Logs only the text content of the sports list

sports.style.listStyle = 'none';  
// Removes the default bullet points from the sports list


// Select the <ul> element with id="food_list"
foods = document.getElementById('food_list');
console.log(food_list);  
// Logs the food_list element (note: should be "foods", not "food_list", otherwise it will throw an error)

console.log(foods.innerHTML);  
// Logs all child elements (list items) inside the <ul> as HTML

console.log(foods.innerText);  
// Logs only the text content of the food list

// Add inline CSS styles dynamically to the food list
foods.style.listStyle = 'none';             // Removes bullet points
foods.style.border = '1px solid black';     // Adds border around the list
foods.style.padding = '10px';               // Adds padding inside the list
foods.style.display = 'flex';               // Makes items display in a row (flexbox)
foods.style.justifyContent = 'space-between'; 
// Distributes items evenly with space between them


// Select the <li> element with id="badminton"
badminton = document.getElementById('badminton');
console.log(badminton);  
// Logs the <li> element for "Badminton"

// Add inline CSS styles dynamically to the badminton list item
badminton.style.backgroundColor = "red";    // Sets background color to red
badminton.style.fontSize = "30px";          // Increases font size
badminton.style.padding = "30px";           // Adds padding inside the element
badminton.style.borderRadius = "30px";      // Rounds the corners
badminton.style.color = "aquamarine";       // Sets text color to aquamarine
