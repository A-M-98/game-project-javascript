const question = document.querySelector(".game__question");
const answerButtons = document.querySelector(".game__answer-btns")
const answers = document.querySelectorAll(".game__answer");
const submitButton = document.querySelector("#submit");
const playButton = document.querySelector("#play");
const questionsContainer = document.querySelector(".game__questions-container");
// const answerButton1 = document.querySelector("#answer1");
// const answerButton2 = document.querySelector("#answer2");
// const answerButton3 = document.querySelector("#answer3");
// const answerButton4 = document.querySelector("#answer4");
// const scores = document.querySelectorAll(".game__score");

let randomiseQuestions, currentQuestion

const playGame = () => {
    playButton.classList.add('remove');
    questionsContainer.classList.remove('remove');
    randomiseQuestions = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    nextQuestion();
}

const nextQuestion = () => {
    resetQuestions();
    displayQuestion(randomiseQuestions[currentQuestion]);
}

const displayQuestion= (quizQuestions) => {
    question.innerHTML = quizQuestions.quizQuestion;
    quizQuestions.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('game__answer');
        if(answer.correct) {
            button.dataset.correct = answer.correct
        };
        button.addEventListener("click", chooseAnswer);
        answerButtons.appendChild(button);

    });
}

const resetQuestions = () => {
    submitButton.classList.add('remove');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    };
}

const chooseAnswer = (event) => {
    const chosenAnswer = event.target;
    const correct = chosenAnswer.dataset.correct;
    setClass(document.body, correct);
    Array.from(answerButtons.children).forEach(answerElement => {
        setClass(answerElement, answerElement.dataset.correct)
    })
    submitButton.classList.remove('remove');
}

const setClass = (element, correct) => {
    clearClass(element);
    if(correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

const clearClass = (element) => {
        element.classList.remove('correct');
        element.classList.remove('incorrect');
}

playButton.addEventListener("click", playGame);
submitButton.addEventListener("click", () => {
    currentQuestion++;
    nextQuestion()
})

const questions = [
    {
        quizQuestion: "what is 10 + 10?",
        answers: [
            {text: "20", correct: true},
            {text: "100", correct: false},
            {text: "10", correct: false},
            {text: "1", correct: false}
        ]
    },
    {
        quizQuestion: "what is 10 ÷ 5?",
        answers: [
            {text: "2", correct: true},
            {text: "25", correct: false},
            {text: "30", correct: false},
            {text: "5", correct: false}
        ]
    },
    {
        quizQuestion: "what is 5 x 5?",
        answers: [
            {text: "10", correct: false},
            {text: "50", correct: false},
            {text: "25", correct: true},
            {text: "500", correct: false}
        ]
    },
    {
        quizQuestion: "what is 20 x 20?",
        answers: [
            {text: "200", correct: false},
            {text: "40", correct: false},
            {text: "400", correct: true},
            {text: "1", correct: false}
        ]
    },
    {
        quizQuestion: "what is 300 ÷ 10?",
        answers: [
            {text: "33", correct: false},
            {text: "10", correct: false},
            {text: "300", correct: false},
            {text: "30", correct: true}
        ]
    },
    {
        quizQuestion: "what is 57 - 7?",
        answers: [
            {text: "55", correct: false},
            {text: "50", correct: true},
            {text: "40", correct: false},
            {text: "65", correct: false}
        ]
    },
    {
        quizQuestion: "what is 33 - 12?",
        answers: [
            {text: "20", correct: false},
            {text: "21", correct: true},
            {text: "10", correct: false},
            {text: "1", correct: false}
        ]
    },
    {
        quizQuestion: "what is 100 ÷ 20?",
        answers: [
            {text: "20", correct: false},
            {text: "100", correct: false},
            {text: "10", correct: false},
            {text: "5", correct: true}
        ]
    },
    {
        quizQuestion: "what is 10 - 10?",
        answers: [
            {text: "20", correct: false},
            {text: "100", correct: false},
            {text: "0", correct: true},
            {text: "1", correct: false}
        ]
    },
    {
        quizQuestion: "what is 10 x 10?",
        answers: [
            {text: "20", correct: false},
            {text: "100", correct: true},
            {text: "200", correct: false},
            {text: "0", correct: false}
        ]
    },
]

 