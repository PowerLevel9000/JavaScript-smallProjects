document.querySelector('#push').onclick = function () {
  const currentTasks = document.querySelectorAll('.delete');
  if (document.querySelector('#newtask input').value.length === 0) {
    document.querySelector('#error').classList.toggle('invisible');
    document.querySelector('#error').innerHTML = `
          Please Enter A Task
    `;
  } else {
    if (document.querySelector('#error').classList.value === 'error') {
      document.querySelector('#error').classList.value = 'error  invisible';
    }
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

    for (let i = 0; i < currentTasks.length; i += 1) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};