const sportsItems = document.getElementsByClassName('sportsItems');

for(const item of sportsItems){
    item.addEventListener('click', function(e){
        e.target.parentNode.removeChild(e.target);
    });
}
const ulTarget = document.getElementById('ulTarget');

document.getElementById('sportBTN').addEventListener('click', function(){
    const sportsName = document.getElementById('sportsName');

    const li = document.createElement('li');
    li.innerText = sportsName.value;
    li.setAttribute('class', 'sportsItems border p-5 bg-stone-600 rounded-md');

    ulTarget.append(li);
});


const ulTargetCity = document.getElementById('ulTargetCity');

ulTargetCity.addEventListener('click', function(e){
    e.target.parentNode.removeChild(e.target);
});

document.getElementById('cityBTN').addEventListener('click', function(){
    const cityName = document.getElementById('cityName');

    const li = document.createElement('li');
    li.innerText = cityName.value;
    li.setAttribute('class', 'sportsItems border p-5 bg-stone-600 rounded-md');

    ulTargetCity.append(li);
});