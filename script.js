const question = document.querySelector(".game__question");
const answers = document.querySelectorAll(".game__answer");
const submitButton = document.querySelector("#submit");
const playButton = document.querySelector("#play");
const questionsContainer = document.querySelector(".game__questions-container");
const answerButton1 = document.querySelector("#answer1");
const answerButton2 = document.querySelector("#answer2");
const answerButton3 = document.querySelector("#answer3");
const answerButton4 = document.querySelector("#answer4");
const scores = document.querySelectorAll(".game__score");

const randomiseQuestions

const playGame = () => {
    playButton.classList.add('remove');
    questionsContainer.classList.remove('remove');
    submitButton.classList.remove('remove');
    submitAndNextQuestion();
}

const submitAndNextQuestion =() => {
}

const chooseAnswer = () => {
    
}

playButton.addEventListener("click", playGame);

const questions = [{
    quizQuestion: "what is 10 + 10?",
    answers: [
        {text: "20", correct: true},
        {text: "100", correct: false},
        {text: "10", correct: false},
        {text: "1", correct: false},
    ]
}]

 