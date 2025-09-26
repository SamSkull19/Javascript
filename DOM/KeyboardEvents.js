document.getElementById('userName').addEventListener('keyup', function(event){
    const userNameShow = document.getElementById('userNameShow');
    userNameShow.innerText = event.target.value;
})

document.getElementById('userAddress').addEventListener('keydown', function(event){
    const userAddressShow = document.getElementById('userAddressShow');
    userAddressShow.innerText = event.target.value;
})

document.getElementById('userFood').addEventListener('keypress', function(event){
    const userFoodShow = document.getElementById('userFoodShow');
    userFoodShow.innerText = event.target.value;
})

document.getElementById('userTravel').addEventListener('keyup', function(event){
    const userTravelShow = document.getElementById('userTravelShow');
    userTravelShow.innerText = event.target.value;
})