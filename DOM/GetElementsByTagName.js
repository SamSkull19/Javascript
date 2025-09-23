// Select all <li> elements from the document
const lists = document.getElementsByTagName('li');
console.log(lists); 
// Logs an HTMLCollection of all <li> elements inside the document

// Loop through each <li> element and log the entire element
for(const list of lists){
    console.log(list); 
    // Example output: <li>Thor</li>
}

// Loop through each <li> element and log only the text inside it
for(const list of lists){
    console.log(list.innerText); 
    // Example output: Thor, Iron Man, Spider Man, etc.
}


// Select all <ul> elements from the document
const uls = document.getElementsByTagName('ul');
console.log(uls); 
// Logs an HTMLCollection of all <ul> elements (movie_list, sports_list, food_list)

// Loop through each <ul> and log its inner HTML (all child <li> tags as raw HTML)
for(const ul of uls){
    console.log(ul.innerHTML); 
    // Example output: <li>Thor</li><li>Iron Man</li>...
}

// Loop through each <ul> and log its inner text (only the text content)
for(const ul of uls){
    console.log(ul.innerText); 
    // Example output: Thor Iron Man Spider Man Matrix Martian
}


// Select all <section> elements from the document
const sections = document.getElementsByTagName('section');
console.log(sections); 
// Logs an HTMLCollection of all <section> elements (field_sec, field_sec2, field_sec3)

// Loop through each <section> and log its inner HTML (all nested tags inside it)
for(const section of sections){
    console.log(section.innerHTML); 
    // Example output: 
    // Welcome To See Your Favorite Movies List <header>...</header> <ul>...</ul>
}

// Loop through each <section> and log only the inner text (text without tags)
for(const section of sections){
    console.log(section.innerText); 
    // Example output:
    // Welcome To See Your Favorite Movies List
    // Movies
    // Thor Iron Man Spider Man Matrix Martian
}
