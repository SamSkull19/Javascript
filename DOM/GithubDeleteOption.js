document.getElementById('deleteRepo').addEventListener('keyup', function(e){
    const text = e.target.value;
    const deleteRepoBTN = document.getElementById('deleteRepoBTN');

    if(text.toLowerCase() === 'delete'){
        deleteRepoBTN.removeAttribute('disabled');

        const repoTitle = document.getElementById('repoTitle');
        deleteRepoBTN.addEventListener('click', function(){
            repoTitle.innerText = "Repo Deleted Successfully!!!";
        });
    }

    else{
        deleteRepoBTN.setAttribute('disabled', true);
    }
});


document.getElementById('deleteName').addEventListener('keyup', function(e){
    const text2 = e.target.value;
    const deleteNameBTN = document.getElementById('deleteNameBTN');
    console.log(text2)
    if(text2.toLowerCase() === 'samskull'){
        deleteNameBTN.removeAttribute('disabled');

        deleteNameBTN.addEventListener('click', function(){
            document.getElementById('userTitle').innerText = "User Name Deleted Successfully!!!"
        });
    }

    else{
        deleteNameBTN.setAttribute('disabled', true);
    }
});
