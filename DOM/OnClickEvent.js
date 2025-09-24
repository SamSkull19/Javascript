// Get the div with id 'eventInfo' which contains the paragraph about DOM events
const eventInfo = document.getElementById('eventInfo');

// Function to change background color of 'eventInfo' to red
function makeRed() {
    eventInfo.style.backgroundColor = 'red';
}

// Function to change background color of 'eventInfo' to white
function makeWhite() {
    eventInfo.style.backgroundColor = 'white';
}

// Get the button with id 'makeBlue' from HTML and set its onclick handler
const btnMakeBlue = document.getElementById('makeBlue');
btnMakeBlue.onclick = function makeBlue(){
    eventInfo.style.backgroundColor = 'blue';
}

// Get the button with id 'makeGreen' from HTML and set its onclick handler
const btnMakeGreen = document.getElementById('makeGreen');
btnMakeGreen.onclick = function makeGreen(){
    eventInfo.style.backgroundColor = 'green';
}

// Get the button with id 'makeYellow' and change background color to yellow on click
const btnMakeYellow = document.getElementById('makeYellow');
btnMakeYellow.onclick = function(){
    eventInfo.style.backgroundColor = 'yellow';
}

// Get the button with id 'makeSlateBlue' and change background color to slateblue on click
const btnMakeSlateBlue = document.getElementById('makeSlateBlue');
btnMakeSlateBlue.onclick = function(){
    eventInfo.style.backgroundColor = 'slateblue';
}

// Get the button with id 'makeGray' and attach the makeGray function
const btnMakeGray = document.getElementById('makeGray');
btnMakeGray.onclick = makeGray;

// Function to change background color of 'eventInfo' to gray
function makeGray(){
    eventInfo.style.backgroundColor = 'gray';
}

// Get the button with id 'makeViolet' and attach the makeViolet function
const btnMakeViolet = document.getElementById('makeViolet');
btnMakeViolet.onclick = makeViolet;

// Function to change background color of 'eventInfo' to violet
function makeViolet(){
    eventInfo.style.backgroundColor = 'violet';
}

// Get the button with id 'makeBrown' and attach the makeBrown function
const btnMakeBrown = document.getElementById('makeBrown');
btnMakeBrown.onclick = makeBrown;

// Function to change background color of 'eventInfo' to brown
function makeBrown(){
    eventInfo.style.backgroundColor = 'brown';
}

// Function to change background color of 'eventInfo' to tomato
function makeTomato(){
    eventInfo.style.backgroundColor = 'tomato';
}

// Get the button with id 'makeOrange' and set its onclick handler to change background color
const btnMakeOrange = document.getElementById('makeOrange');
btnMakeOrange.onclick = function makeOrange(){
    eventInfo.style.backgroundColor = 'orange';
}

// Get the button with id 'testing' from HTML
const testing = document.getElementById('testing');

// Attach the success function to the testing button
testing.onclick = success;

// Function to display a message in 'eventInfo' and change the button text
function success(){
    eventInfo.innerText = 'Now you have acquired the knowledge of DOM Event Successful';
    testing.innerText = "Successful";
}
