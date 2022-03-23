class Quiz{
    constructor(questions){
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    guess(answer){
        if(this.getQuestionIndex().isCorrectAnswer(answer)){
            this.score++;
        }

        this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}

// Create Question class
class Question{
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice){
        return this.answer === choice;
    }
}

// Display Question
function displayQuestion(){
    if(quiz.isEnded()){
        showScores();
    }else{
        // show question or next question
        let questionElement = document.querySelector('#question');
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for( let i = 0; i < choices.length; i++){
            let choiceElement = document.querySelector('#choice' + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        // show progress
        showProgress();
    }
}

// guess function 
function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        displayQuestion();
    }
}

// show quiz progress
function showProgress(){
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.querySelector('#progress');
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// show score
function showScores(){
    let quizEndHTML = 
                    `
                    <h1>Quiz Completed</h1>
                    <h2 id="score">You scored: ${quiz.score} of ${quiz.questions.length}</h2>
                    <div class="quiz-repeat">
                        <a href="index.html">Take Quiz Again</a>
                    </div>
                    `;

                    let quizElement = document.querySelector('#quiz');
                    quizElement.innerHTML = quizEndHTML;
}

// Create quiz questions 
let questions = [
    new Question(
        "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
    ),

    new Question(
        "Cascading Style Sheet Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "CSS"
    ),

    new Question(
        "Which is a JavaScript Framework?", ["Laravel", "XHTML", "CSS", "React"], "React"
    ),

    new Question(
        "Which is a backend language?", ["PHP", "CSS", "HTML", "React"], "PHP"
    ),

    new Question(
        "Which is best for Artificial Intelligence?", ["Python", "XHTML", "CSS", "HTML"], "Python"
    )

];

let quiz = new Quiz(questions);

// Display question
displayQuestion();

// Add countdown 
let time = 1;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.querySelector('#count-down');


function startCountdown(){
    let quizTimer = setInterval(() => {
        if( quizTime <= 0){
            clearInterval(quizTimer);
            showScores();
        }else{
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time: ${min}:${sec}`;
        }
    }, 1000);
}

startCountdown();