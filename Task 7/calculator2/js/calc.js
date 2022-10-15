function number1(checkinput) {
    if(document.getElementById("display").value == ''){
        var a = document.getElementById("number1").value += checkinput;
    }else{
        a = document.getElementById("number2").value += checkinput;
    }
}
function checkop(checkinput) {
    document.getElementById("display").value = checkinput;
}
function equal() {
    var number = document.getElementById("number1").value; 
    number += document.getElementById("display").value; 
    number += document.getElementById("number2").value;
    if(number == ''){
        document.getElementById("answer").value = "Please Select Inputs";
        document.getElementById("answer").style.color = "Red";
    }else{
        document.getElementById("answer").value = eval(number);
        document.getElementById("answer").style.color = "White";
    }
}

function clrscr() {
    document.getElementById("number1").value = "";
    document.getElementById("display").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("answer").value = "";
}