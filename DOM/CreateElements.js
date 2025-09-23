// Select the main <body> element by its ID
const main_body = document.getElementById('main_body');

// Create a new <section> element for the games list
sectionGames = document.createElement('section');

// Add a CSS class to style the section
sectionGames.classList.add('games_section_intro');

// Add an id attribute (should be unique, don't reuse an id already in HTML)
sectionGames.setAttribute('id', 'field_sec3');

// Add some intro text directly inside the section
sectionGames.innerText = "Welcome To See Your Favorite Games List";

// Create a <header> element for the section title
headerGames = document.createElement('header');

// Add CSS class for styling
headerGames.classList.add('games_section');

// Add text content
headerGames.innerText = "Games";

// Append the header inside the section
sectionGames.append(headerGames);

// Create a <ul> element to hold the list of games
gamesUL = document.createElement('ul');

// Add class for styling
gamesUL.classList.add('games_name');

// Add id attribute
gamesUL.setAttribute('id', 'games_list');


// Create first <li> for "Valorant"
gamesLi1 = document.createElement('li');
gamesLi1.classList.add('games_GG');  // add class for styling
gamesLi1.innerText = "Valorant";     // add game name
gamesUL.append(gamesLi1);            // append <li> to <ul>


// Create second <li> for "CS2"
gamesLi2 = document.createElement('li');
gamesLi2.classList.add('games_GG');
gamesLi2.innerText = "CS2";
gamesUL.append(gamesLi2);


// Create third <li> for "COD"
gamesLi3 = document.createElement('li');
gamesLi3.classList.add('games_GG');
gamesLi3.innerText = "COD";
gamesUL.append(gamesLi3);


// Create fourth <li> for "Assassin's"
gamesLi4 = document.createElement('li');
gamesLi4.classList.add('games_GG');
gamesLi4.innerText = "Assassin's";
gamesUL.append(gamesLi4);


// Create fifth <li> for "Minecraft"
gamesLi5 = document.createElement('li');
gamesLi5.classList.add('games_GG');
gamesLi5.innerText = "Minecraft";
gamesUL.append(gamesLi5);


// Append the <ul> (with all <li> items) to the <section>
sectionGames.append(gamesUL);


// Finally, append the whole <section> into the main <body>
main_body.append(sectionGames);
