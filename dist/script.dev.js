"use strict";

var question = document.querySelector(".game__question");
var answerButtons = document.querySelector(".game__answer-btns");
var answers = document.querySelectorAll(".game__answer");
var submitButton = document.querySelector("#submit");
var playButton = document.querySelector("#play");
var questionsContainer = document.querySelector(".game__questions-container"); // const answerButton1 = document.querySelector("#answer1");
// const answerButton2 = document.querySelector("#answer2");
// const answerButton3 = document.querySelector("#answer3");
// const answerButton4 = document.querySelector("#answer4");
// const scores = document.querySelectorAll(".game__score");

var randomiseQuestions, currentQuestion;

var playGame = function playGame() {
  playButton.classList.add('remove');
  questionsContainer.classList.remove('remove');
  submitButton.classList.remove('remove');
  randomiseQuestions = questions.sort(function () {
    return Math.random() - .5;
  });
  currentQuestion = 0;
  nextQuestion();
};

var nextQuestion = function nextQuestion() {
  displayQuestion(randomiseQuestions[currentQuestion]);
};

var displayQuestion = function displayQuestion(quizQuestions) {
  question.innerHTML = quizQuestions.quizQuestion;
  quizQuestions.answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add('game__answer');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    ;
    button.addEventListener("click", chooseAnswer);
    answerButtons.appendChild(button);
  });
};

var chooseAnswer = function chooseAnswer() {};

playButton.addEventListener("click", playGame);
var questions = [{
  quizQuestion: "what is 10 + 10?",
  answers: [{
    text: "20",
    correct: true
  }, {
    text: "100",
    correct: false
  }, {
    text: "10",
    correct: false
  }, {
    text: "1",
    correct: false
  }]
}, {
  quizQuestion: "what is 10 ÷ 5?",
  answers: [{
    text: "2",
    correct: true
  }, {
    text: "25",
    correct: false
  }, {
    text: "30",
    correct: false
  }, {
    text: "5",
    correct: false
  }]
}, {
  quizQuestion: "what is 5 x 5?",
  answers: [{
    text: "10",
    correct: false
  }, {
    text: "50",
    correct: false
  }, {
    text: "25",
    correct: true
  }, {
    text: "500",
    correct: false
  }]
}, {
  quizQuestion: "what is 20 x 20?",
  answers: [{
    text: "200",
    correct: false
  }, {
    text: "40",
    correct: false
  }, {
    text: "400",
    correct: true
  }, {
    text: "1",
    correct: false
  }]
}, {
  quizQuestion: "what is 300 ÷ 10?",
  answers: [{
    text: "33",
    correct: false
  }, {
    text: "10",
    correct: false
  }, {
    text: "300",
    correct: false
  }, {
    text: "30",
    correct: true
  }]
}, {
  quizQuestion: "what is 57 - 7?",
  answers: [{
    text: "55",
    correct: false
  }, {
    text: "50",
    correct: true
  }, {
    text: "40",
    correct: false
  }, {
    text: "65",
    correct: false
  }]
}, {
  quizQuestion: "what is 33 - 12?",
  answers: [{
    text: "20",
    correct: false
  }, {
    text: "21",
    correct: true
  }, {
    text: "10",
    correct: false
  }, {
    text: "1",
    correct: false
  }]
}, {
  quizQuestion: "what is 100 ÷ 20?",
  answers: [{
    text: "20",
    correct: false
  }, {
    text: "100",
    correct: false
  }, {
    text: "10",
    correct: false
  }, {
    text: "5",
    correct: true
  }]
}, {
  quizQuestion: "what is 10 - 10?",
  answers: [{
    text: "20",
    correct: false
  }, {
    text: "100",
    correct: false
  }, {
    text: "0",
    correct: true
  }, {
    text: "1",
    correct: false
  }]
}, {
  quizQuestion: "what is 10 x 10?",
  answers: [{
    text: "20",
    correct: false
  }, {
    text: "100",
    correct: true
  }, {
    text: "200",
    correct: false
  }, {
    text: "0",
    correct: false
  }]
}];