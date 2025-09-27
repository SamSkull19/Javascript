// Function to create a new paragraph and append inside #clickedSections
function createParagraph(text, goal){
    const p = document.createElement('p');  // create <p> element
    p.innerText = text + " - " + 'Clicked : ' + goal; // set inner text

    const clickedSections = document.getElementById('clickedSections'); // target output div
    clickedSections.append(p); // append the <p> into output section
}

// ---------------- Event Listeners for <li> items ---------------- //

// li1 click
document.getElementById('li1Target').addEventListener('click', function(e){
    const text = e.target.innerText;   // get text of li
    const goal = 'li 1 Clicked';       // custom message
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);       // call function to show in clickedSections

    e.stopPropagation(); // stop event from bubbling further to parent (ul, div, section)
});

// li2 click
document.getElementById('li2Target').addEventListener('click', function(e){
    const text = e.target.innerText;
    const goal = 'li 2 Clicked';
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);

    e.stopImmediatePropagation(); // stop bubbling AND prevent other listeners on the same element
});

// li3 click
document.getElementById('li3Target').addEventListener('click', function(e){
    const text = e.target.innerText;
    const goal = 'li 3 Clicked';
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);
});

// li4 click
document.getElementById('li4Target').addEventListener('click', function(e){
    const text = e.target.innerText;
    const goal = 'li 4 Clicked';
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);
});

// li5 click
document.getElementById('li5Target').addEventListener('click', function(e){
    const text = e.target.innerText;
    const goal = 'li 5 Clicked';
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);
});

// li6 click
document.getElementById('li6Target').addEventListener('click', function(e){
    const text = e.target.innerText;
    const goal = 'li 6 Clicked';
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);
});

// ---------------- Event Listeners for parent elements ---------------- //

// ul click
document.getElementById('ulTarget').addEventListener('click', function(e){
    const text = e.target.innerText;  // could be li text (since li is inside ul)
    const goal = 'ul Clicked';
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);
});

// div click
document.getElementById('divTarget').addEventListener('click', function(e){
    const text = e.target.innerText;
    const goal = 'div Clicked';
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);
});

// section click
document.getElementById('sectionTarget').addEventListener('click', function(e){
    const text = e.target.innerText;
    const goal = 'section Clicked';
    console.log(text);
    console.log(goal);
    createParagraph(text, goal);
});
