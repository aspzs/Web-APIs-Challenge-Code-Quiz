var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));

let time = $('#time');
let formEl = $('#save');
let calendary = document.querySelector("#schedule");
let calendary1 = document.querySelector("#schedule1");
let calendary2 = document.querySelector("#schedule2");
let calendary3 = document.querySelector("#schedule3");
let calendary4 = document.querySelector("#schedule4");
let calendary5 = document.querySelector("#schedule5");
let calendary6 = document.querySelector("#schedule6");
let calendary7 = document.querySelector("#schedule7");



calendary.value = localStorage.getItem("notes")

calendary.addEventListener("keyup", event => {
    localStorage.setItem("notes", event.target.value)
})

formEl.on('submit', calendary);

//ESTO ES OTRO NO TE EQUIVOQUES
calendary1.value = localStorage.getItem("notes1")

calendary1.addEventListener("keyup", event => {
    localStorage.setItem("notes1", event.target.value)
})

formEl.on('submit', calendary1);

//OTRO
calendary2.value = localStorage.getItem("notes2")

calendary2.addEventListener("keyup", event => {
    localStorage.setItem("notes2", event.target.value)
})

formEl.on('submit', calendary2);

//OTRO
calendary3.value = localStorage.getItem("notes3")

calendary3.addEventListener("keyup", event => {
    localStorage.setItem("notes3", event.target.value)
})

formEl.on('submit', calendary3);

//OTRO
calendary4.value = localStorage.getItem("notes4")

calendary4.addEventListener("keyup", event => {
    localStorage.setItem("notes4", event.target.value)
})

formEl.on('submit', calendary4);

//OTRO
calendary5.value = localStorage.getItem("notes5")

calendary5.addEventListener("keyup", event => {
    localStorage.setItem("notes5", event.target.value)
})

formEl.on('submit', calendary5);

//OTRO
calendary6.value = localStorage.getItem("notes6")

calendary6.addEventListener("keyup", event => {
    localStorage.setItem("notes6", event.target.value)
})

formEl.on('submit', calendary6);

//OTRO
calendary7.value = localStorage.getItem("notes7")

calendary7.addEventListener("keyup", event => {
    localStorage.setItem("notes7", event.target.value)
})

formEl.on('submit', calendary7);

function emea(){
    var d = new Date();
    var n = d.getUTCHours()+1;       
    if (n > 18 || n < 9) {
      // If time is after 6PM or before 9AM, apply night theme to 'body'
      //document.body.className = "emeanight";
      document.getElementById("schedule").className = 'emeanight';
      document.getElementById("schedule1").className = 'emeanight';
      document.getElementById("schedule2").className = 'emeanight';
      document.getElementById("schedule3").className = 'emeanight';
      document.getElementById("schedule4").className = 'emeanight';
      document.getElementById("schedule5").className = 'emeanight';
      document.getElementById("schedule6").className = 'emeanight';
      document.getElementById("schedule7").className = 'emeanight';

    }
    else {
      // Else use ‘day’ theme
      //document.body.className = "emeaday";
      document.getElementById("test").className = 'emeaday';
    }
}

emea();