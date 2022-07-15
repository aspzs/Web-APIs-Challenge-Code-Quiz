// Searching all elements in our
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const startTxt = document.getElementById("startTxt");
const startTxt1 = document.getElementById("startTxt1");
const startTxt2 = document.getElementById("startTxt2");

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
}, 1000);


start.addEventListener("click",startText);


function startText(){
    startTxt.style.display = "none";
    startTxt1.style.display = "none";
    startTxt2.style.display = "none";
}

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}
// create our questions
let questions = [

    {

        question : "What are JavaScript Data Types?",
        choiceA : "Number, String, Boolean, Object, Undefined",
        choiceB : "Only variables",
        choiceC : "Only Boolean",
        choiceD : "Only Objects",
        correct : "A"

    },{

        question : "How do you declare a variables?",
        choiceA : "var",
        choiceB : "var, const, let",
        choiceC : "const",
        choiceD : "let",
        correct : "B"

    },{

        question : "How do you comment in JavaScript?",
        choiceA : "*/",
        choiceB : "/",
        choiceC : "/**/",
        choiceD : "//",
        correct : "D"

    },{

        question : "What is the correct way to call console?",
        choiceA : "console.log();",
        choiceB : "console();",
        choiceC : "console().log;",
        choiceD : "log.console();",
        correct : "A"

    }

];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;    
    choiceD.innerHTML = q.choiceD;

}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        answerIsCorrect();
    }else{
        // answer is wrong
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        scoreRender();
    }
}

function toggle_visibility(checkAnswer) {
    var e = document.getElementById("0");
    if(e.style.display == 'block')
       e.style.display = 'none';
 }

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).textContent = "Correct";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).textContent = "Wrong";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

