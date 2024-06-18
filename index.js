let number = ''
let calc;

 function Check(num){
    if(num !== '='){
    document.getElementById("result").innerText += num;
    }
}
function Res(){
    let Get = document.getElementById("result").innerText
    let Res = eval(Get) 
    document.getElementById("result").innerText = Res; 
}

function Clear(){
    document.getElementById("result").innerText = ''; 
}

var el = document.getElementById("theme");


if (el.addEventListener) {
    el.addEventListener("click", function() {
        switch(document.getElementById("theme").innerText){
            case '☀️':
                document.getElementById("theme").innerText = '🌙';
                var element = document.body;
                element.classList.toggle("dark-mode");
                break;
            case '🌙':
                document.getElementById("theme").innerText = '☀️'; 
                var element = document.body;
                element.classList.toggle("dark-mode");
                break;
        }

    }, false);
} else { //IE8 support
    el.attachEvent("onclick", function() { 
        switch(document.getElementById("theme").innerText){
            case '☀️':
                document.getElementById("theme").innerText = '🌙'; 
                document.getElementsByClassName("btn-n").style.backgroundColor = "white"
                break;
            case '🌙':
                document.getElementById("theme").innerText = '☀️'; 
                break;
        }
    });
}