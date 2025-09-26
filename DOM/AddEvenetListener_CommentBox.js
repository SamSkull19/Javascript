const comment_container = document.getElementById('comment_container');

document.getElementById('submitBTN').addEventListener('click', function(){
    const comments_input = document.getElementById('comments_input');
    // console.log(comments_input.value);

    newComment = document.createElement('p');
    newComment.setAttribute('class', 'text-lg font-semibold text-violet-600 border p-5 rounded-sm mt-5');

    newComment.innerText = comments_input.value;
    comment_container.appendChild(newComment);

    comments_input.value = '';
});

