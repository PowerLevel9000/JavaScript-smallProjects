document.querySelector('#push').onclick = function () {
  let currentTasks = document.querySelectorAll('.delete');
  if (document.querySelector('#newtask input').value.length == 0) {
    alert('Please Enter a Task');
  }else {
    document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('#newtask input').value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;

    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    };
  };
};