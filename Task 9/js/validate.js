//  submit btn vallidation check

function validation(){
    


    var fname = document.forms['myform']['fname'].value;
    var fnamecheck = /^[A-Za-z]{2,30}$/;

    var lname = document.getElementById('lname').value;
    var lnamecheck = /^[A-Za-z]{2,30}$/;

    var username = document.getElementById('username').value;
    var unamecheck = /^[A-Za-z._0-9]{2,10}$/;
    
    var email = document.getElementById('email').value;
    var emailcheck = /^[A-Za-z0-9]{1,}@[A-Za-z]{2,}[.]{1}[A-Za-z.]{2,8}$/;
    
    
    var password = document.getElementById('password').value;
    var passcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])[a-zA-Z0-9!@#\$%\^&\*]{8,16}$/;
    
    var conpassword = document.getElementById('conpassword').value;
     
    var number = document.getElementById('number').value;
    var numcheck = /^[0-9]{10}$/;
    
    var country = document.getElementById('country').value;
    var check;

    if(fnamecheck.test(fname)){
        document.getElementById('fnameerror').innerHTML = " ";
    }else{
        document.getElementById('fnameerror').innerHTML = " ** fill Firstname  ";
        check = false;
        return false;
        
    }

    if(lnamecheck.test(lname)){
        document.getElementById('lnameerror').innerHTML = " ";
    }else{
        document.getElementById('lnameerror').innerHTML = " ** Please fill Last Name";
        check = false;
        return false;
    }

    if(unamecheck.test(username)){
        document.getElementById('usererror').innerHTML = " ";
    }else{
        document.getElementById('usererror').innerHTML = " ** Fill Username - Username must only contain . _ character and digit's";
        check = false;
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }else{
        document.getElementById('emailerror').innerHTML = " ** Fill Email id - Email like this abc12@abc.com right format";
        check = false;
        return false;
    }

    if(passcheck.test(password)){
        document.getElementById('passerror').innerHTML = " ";
    }else{
        document.getElementById('passerror').innerHTML = " **  Fill Your Password - password must contain one uppercase,one lowercase, one digit,one specialcharcter and 8 character's long";
        check = false;
        return false;
    }

    if(conpassword.match(password)){
        document.getElementById('cpasserror').innerHTML = " ";
    }else{
        document.getElementById('cpasserror').innerHTML = " ** Fill your Confirm password - confirmpassword doesn't match password";
        check = false;
        return false;
    }

    if(numcheck.test(number)){
        document.getElementById('numerror').innerHTML = " ";
    }else{
        document.getElementById('numerror').innerHTML = " ** Fill your number-number must contain 10 digits";
        check = false;
        return false;
    }

    if(country != "select country"){
        document.getElementById('conerror').innerHTML = " ";
    }else{
        document.getElementById('conerror').innerHTML = " ** Please select country";
        check = false;
        return false;

    }
    var valid = false;
    var x = document.myform.Gender;

    for(var i=0;i<x.length;i++){
        if(x[i].checked){
            valid=true;
            break;
        }
    }
    if(valid){
        document.getElementById('generror').innerHTML = " ";
    }else{
        document.getElementById('generror').innerHTML = " ** Please select gender";
        check = false;
        return false;
    }

    var check =0;
    var y = document.myform.hobbies;

    for(var i=0;i<y.length;i++){
        if(y[i].checked){
            check+=1;
        }
    }
    if(check<=2){
        document.getElementById('hoberror').innerHTML = " ";
    }
    else{
        document.getElementById('hoberror').innerHTML = " **Please select only 2 or less hobbies ";
        check = false;
        return false;
    }
    
    if(check == false){
        alert("error");
        return false;
    }else{
        setTimeout(function() {window.location = "wel.html" });
    }

}

// check all function

function firstname(){
    var fname = document.forms['myform']['fname'].value;
    var fnamecheck = /^[A-Za-z]{2,30}$/
    if(fnamecheck.test(fname)){
        document.getElementById('fnameerror').innerHTML = " ";
    }else{
        document.getElementById('fnameerror').innerHTML = " ** Firstname is invalid Plaease write only characters";
        return false;
    }
}

function lastname(){
    var lname = document.getElementById('lname').value;
    var lnamecheck = /^[A-Za-z]{2,30}$/;
    if(lnamecheck.test(lname)){
        document.getElementById('lnameerror').innerHTML = " ";
    }else{
        document.getElementById('lnameerror').innerHTML = " ** Lastname is invalid use characters only";
        return false;
    }
}

function usernameFunc(){
    var username = document.getElementById('username').value;
    var unamecheck = /^[A-Za-z._0-9]{2,10}$/;
    if(unamecheck.test(username)){
        document.getElementById('usererror').innerHTML = " ";
    }else{
        document.getElementById('usererror').innerHTML = " **Username must only contain . _ character and digit's";
        return false;
    }


}
function emailFunc(){
    var email = document.getElementById('email').value;
    var emailcheck = /^[A-Za-z0-9]{1,}@[A-Za-z]{2,}[.]{1}[A-Za-z.]{2,8}$/
    if(emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = " ";
    }else{
        document.getElementById('emailerror').innerHTML = " ** Email like this abc12@abc.com right format";
        return false;
    }
}

function passFunc(){
    var password = document.getElementById('password').value;
    var passcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])[a-zA-Z0-9!@#\$%\^&\*]{8,16}$/;
    if(passcheck.test(password)){
        document.getElementById('passerror').innerHTML = " ";
    }else{
        document.getElementById('passerror').innerHTML = " ** password must contain one uppercase,one lowercase, one digit,one specialcharcter and 8 character's long";
        return false;
    }

}

function cpassFunc(){
    var p= document.getElementById('password').value;
    var conpassword = document.getElementById('conpassword').value;

    if( conpassword.match(p)){
        document.getElementById('cpasserror').innerHTML = " ";
    }else{
        document.getElementById('cpasserror').innerHTML = " **confirm password doesn't match password";
    }
}

function numFunc(){
    var number = document.getElementById('number').value;
    var numcheck = /^[0-9]{10}$/;
    if(numcheck.test(number)){
        document.getElementById('numerror').innerHTML = " ";
    }else{
        document.getElementById('numerror').innerHTML = " ** number must contain 10 digits";
        return false;
    }
}

function countryFunc(){
    var country = document.getElementById('country').value;
    if(country != "select country"){
        document.getElementById('conerror').innerHTML = " ";
    }else{
        document.getElementById('conerror').innerHTML = " ** Please select country";
        return false;

    }
}

