const question = document.querySelector(".game__question");
const answers = document.querySelectorAll(".game__answer");
const submitButton = document.querySelector("#submit");
const playButton = document.querySelector("#play");
const questionsContainer = document.querySelector(".game__questions-container")

playButton.addEventListener("click", playGame);
submitButton.addEventListener("click", submitAndNextQuestion);

function playGame() {
    playButton.classList.add('remove');
    questionsContainer.classList.remove('remove');
    submitButton.classList.remove('remove');
}

function submitAndNextQuestion() {
}

function chooseAnswer() {
    
}

questions [{
    "quizQuestion": "what is 10 + 10?",
    "A": "20",
    "B": "15",
    "C": "25",
    "D": "100"
}]

 