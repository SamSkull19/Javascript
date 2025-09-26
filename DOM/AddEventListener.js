// Get the div where events will show effects
const eventInfo = document.getElementById('eventInfo');

// -------- Event Listeners for Buttons -------- //

// Using a named function for Red button
const makeRed = document.getElementById('makeRed');
makeRed.addEventListener('click', btnMakeRed);

// Function to make background red
function btnMakeRed(){
    eventInfo.style.backgroundColor = 'red';
}

// Using a named function inside addEventListener for Blue button
const makeBlue = document.getElementById('makeBlue');
makeBlue.addEventListener('click', function btnMakeBlue(){
    eventInfo.style.backgroundColor = 'blue';
});

// Using anonymous function for Green button
const makeGreen = document.getElementById('makeGreen');
makeGreen.addEventListener('click', function (){
    eventInfo.style.backgroundColor = 'green';
});

// Inline function inside addEventListener for Yellow button
document.getElementById('makeYellow').addEventListener('click', function btnMakeYellow(){
    eventInfo.style.backgroundColor = 'yellow';
});

// Inline anonymous function for SlateBlue button
document.getElementById('makeSlateBlue').addEventListener('click', function (){
    eventInfo.style.backgroundColor = 'slateblue';
});

// Example of "mouseover" event → triggers when hovering over the button
document.getElementById('makeGray').addEventListener('mouseover', function (){
    eventInfo.style.backgroundColor = 'gray';
});

// Example of "mouseenter" event → triggers once when cursor enters
document.getElementById('makeViolet').addEventListener('mouseenter', function (){
    eventInfo.style.backgroundColor = 'violet';
});

// Example of "mouseleave" event → triggers when cursor leaves the button
document.getElementById('makeBrown').addEventListener('mouseleave', function (){
    eventInfo.style.backgroundColor = 'brown';
});

// Example of "mouseup" event → triggers after releasing mouse click
document.getElementById('makeTomato').addEventListener('mouseup', function (){
    eventInfo.style.backgroundColor = 'tomato';
});

// Another "mouseup" event for Orange button
document.getElementById('makeOrange').addEventListener('mouseup', function (){
    eventInfo.style.backgroundColor = 'orange';
});

// Example of "mouseout" event → triggers when mouse leaves the element (differs slightly from mouseleave)
document.getElementById('makeWhite').addEventListener('mouseout', function (){
    eventInfo.style.backgroundColor = 'white';
});

// Test button event → changes text in both eventInfo and itself
document.getElementById('testing').addEventListener('click', function (){
    eventInfo.innerText = 'Now you have acquired the knowledge of DOM Event Successful';
    testing.innerText = "Successful"; // changes button text
});
