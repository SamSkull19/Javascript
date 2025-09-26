// ================= Helper Function =================
// showResult() updates the selected answer text and shows
// whether it is correct (✅) or wrong (❌).
// Parameters:
// answerText -> text of the chosen option
// isCorrect  -> true/false, defines correct or wrong answer
// quizAns    -> <span> element where selected answer is displayed
// quizAnsContainer -> parent container where Right/Wrong message is added

function showResult(answerText, isCorrect, quizAns, quizAnsContainer){
    // update chosen answer text
    quizAns.innerText = answerText;

    // remove old Right/Wrong message if exists (so only one message is shown)
    const oldMsg = quizAnsContainer.querySelector('.answer-msg');
    if (oldMsg) oldMsg.remove();

    // create a new message paragraph
    const rightWrong = document.createElement('p');
    rightWrong.innerText = isCorrect ? "✅ Right Answer" : "❌ Wrong Answer";
    rightWrong.setAttribute('class', 'answer-msg m-4 text-lg font-semibold');

    // append the new message under the answer box
    quizAnsContainer.appendChild(rightWrong);
}

// ================= Question 1 =================
const quizAns1 = document.getElementById('quizAns1');                 // span for showing chosen answer
const quizAns1Container = document.getElementById('quizAns1Container'); // container for answer + message

// (a) Option A -> Wrong
document.getElementById('quizAns1OptionABtn').addEventListener('click', function (){
    const quizAns1OptionA = document.getElementById('quizAns1OptionA');
    showResult(quizAns1OptionA.innerText, false, quizAns1, quizAns1Container);
});

// (b) Option B -> Correct
document.getElementById('quizAns1OptionBBtn').addEventListener('click', function (){
    const quizAns1OptionB = document.getElementById('quizAns1OptionB');
    showResult(quizAns1OptionB.innerText, true, quizAns1, quizAns1Container);
});

// (c) Option C -> Wrong
document.getElementById('quizAns1OptionCBtn').addEventListener('click', function (){
    const quizAns1OptionC = document.getElementById('quizAns1OptionC');
    showResult(quizAns1OptionC.innerText, false, quizAns1, quizAns1Container);
});

// (d) Option D -> Wrong
document.getElementById('quizAns1OptionDBtn').addEventListener('click', function (){
    const quizAns1OptionD = document.getElementById('quizAns1OptionD');
    showResult(quizAns1OptionD.innerText, false, quizAns1, quizAns1Container);
});


// ================= Question 2 =================
const quizAns2 = document.getElementById('quizAns2');
const quizAns2Container = document.getElementById('quizAns2Container');

// (a) Wrong
document.getElementById('quizAns2OptionABtn').addEventListener('click', function (){
    const quizAns2OptionA = document.getElementById('quizAns2OptionA');
    showResult(quizAns2OptionA.innerText, false, quizAns2, quizAns2Container);
});

// (b) Correct
document.getElementById('quizAns2OptionBBtn').addEventListener('click', function (){
    const quizAns2OptionB = document.getElementById('quizAns2OptionB');
    showResult(quizAns2OptionB.innerText, true, quizAns2, quizAns2Container);
});

// (c) Wrong
document.getElementById('quizAns2OptionCBtn').addEventListener('click', function (){
    const quizAns2OptionC = document.getElementById('quizAns2OptionC');
    showResult(quizAns2OptionC.innerText, false, quizAns2, quizAns2Container);
});

// (d) Wrong
document.getElementById('quizAns2OptionDBtn').addEventListener('click', function (){
    const quizAns2OptionD = document.getElementById('quizAns2OptionD');
    showResult(quizAns2OptionD.innerText, false, quizAns2, quizAns2Container);
});


// ================= Question 3 =================
const quizAns3 = document.getElementById('quizAns3');
const quizAns3Container = document.getElementById('quizAns3Container');

// (a) Wrong
document.getElementById('quizAns3OptionABtn').addEventListener('click', function (){
    const quizAns3OptionA = document.getElementById('quizAns3OptionA');
    showResult(quizAns3OptionA.innerText, false, quizAns3, quizAns3Container);
});

// (b) Wrong
document.getElementById('quizAns3OptionBBtn').addEventListener('click', function (){
    const quizAns3OptionB = document.getElementById('quizAns3OptionB');
    showResult(quizAns3OptionB.innerText, false, quizAns3, quizAns3Container);
});

// (c) Correct
document.getElementById('quizAns3OptionCBtn').addEventListener('click', function (){
    const quizAns3OptionC = document.getElementById('quizAns3OptionC');
    showResult(quizAns3OptionC.innerText, true, quizAns3, quizAns3Container);
});

// (d) Wrong
document.getElementById('quizAns3OptionDBtn').addEventListener('click', function (){
    const quizAns3OptionD = document.getElementById('quizAns3OptionD');
    showResult(quizAns3OptionD.innerText, false, quizAns3, quizAns3Container);
});


// ================= Question 4 =================
const quizAns4 = document.getElementById('quizAns4');
const quizAns4Container = document.getElementById('quizAns4Container');

// (a) Correct
document.getElementById('quizAns4OptionABtn').addEventListener('click', function (){
    const quizAns4OptionA = document.getElementById('quizAns4OptionA');
    showResult(quizAns4OptionA.innerText, true, quizAns4, quizAns4Container);
});

// (b) Wrong
document.getElementById('quizAns4OptionBBtn').addEventListener('click', function (){
    const quizAns4OptionB = document.getElementById('quizAns4OptionB');
    showResult(quizAns4OptionB.innerText, false, quizAns4, quizAns4Container);
});

// (c) Wrong
document.getElementById('quizAns4OptionCBtn').addEventListener('click', function (){
    const quizAns4OptionC = document.getElementById('quizAns4OptionC');
    showResult(quizAns4OptionC.innerText, false, quizAns4, quizAns4Container);
});

// (d) Wrong
document.getElementById('quizAns4OptionDBtn').addEventListener('click', function (){
    const quizAns4OptionD = document.getElementById('quizAns4OptionD');
    showResult(quizAns4OptionD.innerText, false, quizAns4, quizAns4Container);
});


// ================= Question 5 =================
const quizAns5 = document.getElementById('quizAns5');
const quizAns5Container = document.getElementById('quizAns5Container');

// (a) Wrong
document.getElementById('quizAns5OptionABtn').addEventListener('click', function (){
    const quizAns5OptionA = document.getElementById('quizAns5OptionA');
    showResult(quizAns5OptionA.innerText, false, quizAns5, quizAns5Container);
});

// (b) Wrong
document.getElementById('quizAns5OptionBBtn').addEventListener('click', function (){
    const quizAns5OptionB = document.getElementById('quizAns5OptionB');
    showResult(quizAns5OptionB.innerText, false, quizAns5, quizAns5Container);
});

// (c) Correct
document.getElementById('quizAns5OptionCBtn').addEventListener('click', function (){
    const quizAns5OptionC = document.getElementById('quizAns5OptionC');
    showResult(quizAns5OptionC.innerText, true, quizAns5, quizAns5Container);
});

// (d) Wrong
document.getElementById('quizAns5OptionDBtn').addEventListener('click', function (){
    const quizAns5OptionD = document.getElementById('quizAns5OptionD');
    showResult(quizAns5OptionD.innerText, false, quizAns5, quizAns5Container);
});
