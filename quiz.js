// Questions that will be asked
const Questions = [{
    q: "What is capital of Pyrlandia?",
    a: [{ text: "Fallmoor", isCorrect: false },
    { text: "Marnessa", isCorrect: false },
    { text: "Phoenix", isCorrect: true },
    { text: "Angorre", isCorrect: false }
    ]
 
},
{
    q: "What is the Population of Pyrlandia?",
    a: [{ text: "100,000", isCorrect: false, isSelected: false },
    { text: "1 Million", isCorrect: false },
    { text: "5 Million", isCorrect: false },
    { text: "3.5 Million", isCorrect: true }
    ]
 
},
{
    q: "What does the word Pyrlandia mean?",
    a: [{ text: "Land of Ice", isCorrect: false },
    { text: "Land of Peace", isCorrect: false },
    { text: "Land of Fire", isCorrect: true },
    { text: "Land of Plenty", isCorrect: false }
    ]
 
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}