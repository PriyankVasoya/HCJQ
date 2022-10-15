
// select id
let additems = document.querySelector("#additems");
let listitems = document.querySelector('#listitems');
let submit = document.querySelector('#submit');

// add and del item
additems.addEventListener('submit',additem);
listitems.addEventListener('click',delitem);



function additem(e){
    e.preventDefault();
    let inputitem = document.querySelector("#inputitem").value;
     
    if(inputitem.trim() == '' ||  inputitem.trim() == null){
        alert("Please enter value");
        return flase;
    }else{
        document.querySelector('#inputitem').value ="";
    }

    // create list
    let li = document.createElement('li');
    li.className = "list-group-item";

    let del = document.createElement('button');
   
    del.appendChild(document.createTextNode('-'));
    del.className = "btn-danger  float-right delete";
    li.appendChild(document.createTextNode(inputitem));
    li.appendChild(del);


    listitems.appendChild(li);


}


// delete function
function delitem(e){
    if(e.target.classList.contains('delete')){
        confirm('Are you sure want to delete');
    }
}

function togglebutton(ref,btnId){
    
    document.getElementById('submit').disabled = false;
}