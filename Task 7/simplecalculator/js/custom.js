//clear
document.getElementById('clear').addEventListener("click",()=>{
    document.getElementById('display').value = " ";
})

function num(numb){
    document.getElementById('display').value+=numb;
}

// validtion
function validate(){
    let x = document.getElementById('display').value;
    let pattern =  /^[-+]?[0-9]+([-+*/%]+[-+]?[0-9]+)*$/;
    if(!pattern.test(x)){
        alert("Invalid Input");
    }
    else{
        document.getElementById('display').value = eval(display.value);
    }
}