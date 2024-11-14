
//My first javascript code
//document.getElementById("count-el").innerText = 115;
let count = 0;
let countEl = document.getElementById("count-el");

function increment(){
    count = count + 1;
    countEl.innerText = count;

}

function save(){
    let countStr = count + " - ";
    let message = document.getElementById("message-el");
    message.textContent += countStr;
    count = 0;

}