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

const start = document.getElementById("start");

//Es para empezar el quiz, donde se hará otro div con las preguntas
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
//Este es para los textos que aparecen al inicio
const startTxt = document.getElementById("startTxt");
const startTxt1 = document.getElementById("startTxt1");
const startTxt2 = document.getElementById("startTxt2");

//Esto es para el contador
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
}, 1000);

//Este es para el botón de start quiz
start.addEventListener("click",startText);

//Este es para desaparecer el texto inicial 
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

//Esto es para empezar el quiz y eliminar el botón
start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

//Esto muestra las preguntas

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;


function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;    
    choiceD.innerHTML = q.choiceD;

}

//esto para mostrar las preguntas, que hicimos en la funci´n anterior
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// Te muestra el resultado 
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// Esto es para las respuestas de las preguntas 

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

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).textContent = "Correct";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).textContent = "Wrong";
}

//Función para eliminar, ojalá
$('#selector').delay(5000).fadeOut('slow');


function saveFinalScore() {
    // Save related form data as an object
    var finalScore = {
      progress: progress.value,
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("saveFinalScore", JSON.stringify(finalScore));
  }