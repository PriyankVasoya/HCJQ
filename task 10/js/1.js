// add task
document.querySelector('#add').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
      alert("Please Enter a Task");
    } 
    else {
      document.querySelector('#tasks').innerHTML += `
              <div class="col-lg-8 col-sm-8 col-md-8 col-xs-8 input-group ">
                   <input disabled type="text" style=" margin-top:10px;" class="form-control"  placeholder="${document.querySelector('#inputtxt').value}">
                   
                      <button class="btn btn-danger " id="delete" style="margin-right: 100px; margin-top:10px;" type="button">delete</button>
              </div>`;
  
//    delete box
      let current_tasks = document.querySelectorAll("#delete");
      for (let i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
          current_tasks[i].parentNode.remove();
        }
      }
      document.getElementById('inputtxt').value = "";
    }
   
  }
