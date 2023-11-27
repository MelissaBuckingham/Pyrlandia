  /*jslint browser:true */

  function submitQuiz() {
    const answers = {
        q1: document.querySelector("input[name='q1']:checked"),
        q2: document.querySelector("input[name='q2']:checked"),
        q3: document.querySelector("input[name='q3']:checked")
    };

    let score = 0;

    if (answers.q1 && answers.q1.value === "phoenix") {
        score++;
    }

    if (answers.q2 && answers.q2.value === "3500000") {
        score++;
    }

    if (answers.q3 && answers.q3.value === "fire") {
        score++;
    }

    displayResult(score);
}

function displayResult(score) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `<p>Your score is: ${score} out of 3</p>`;
}
