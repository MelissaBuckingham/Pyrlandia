// Questions that will be asked
/*const Questions = [{
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
}*/

// Alternate way

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){

        // variable to store the HTML output
        const output = [];
      
        // for each question...
        myQuestions.forEach(
          (currentQuestion, questionNumber) => {
      
            // variable to store the list of possible answers
            const answers = [];
      
            // and for each available answer...
            for(letter in currentQuestion.answers){
      
              // ...add an HTML radio button
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
      
            // add this question and its answers to the output
            output.push(
              `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
            );
          }
        );
      
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
      
}

function showResults(){
    // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

//questions
const myQuestions = [
    {
      question: "What is capital of Pyrlandia?",
      answers: {
        a: "Fallmoor",
        b: "Marnessa",
        c: "Phoenix",
        d: "Angorre"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the Population of Pyrlandia?",
      answers: {
        a: "100,000",
        b: "1.5 Million",
        c: "10 Million",
        d: "3.5 Million"
      },
      correctAnswer: "d"
    },
    {
      question: "What does the word Pyrlandia mean?",
      answers: {
        a: "Land of Ice",
        b: "Land of Peace",
        c: "Land of Fire",
        d: "Land of Plenty"
      },
      correctAnswer: "c"
    }
  ];