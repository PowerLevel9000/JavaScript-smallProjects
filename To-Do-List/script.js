document.querySelectorAll('#newtask button').onclick = function(){
  // Check if the input field is empty
  if(document.querySelector('#newtask input').value.length == 0){
    alert("Please Enter a Task");
  } else {
    // Create a new task element and append it to the tasks list
    var task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
      <span id="taskname">${document.querySelector('#newtask input').value}</span>
      <button class="delete">
        <i class="far fa-trash-alt"></i>
      </button>
    `;
    document.querySelector('#tasks').appendChild(task);

    // Add a click event listener to the delete button of the new task
    task.querySelector(".delete").addEventListener("click", function(){
      this.parentNode.remove();
    });
  }
}
