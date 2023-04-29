import addTask from './logic';

const createList = () => {
  function refreshBox() {
    const del = document.querySelector('.task-cont');
    del.remove();
  }
  refreshBox();
  const taskList = document.querySelector('.main');

  const taskCont = document.createElement('div');
  taskCont.classList.add('task-cont');
  taskList.appendChild(taskCont);

  const iT = document.createElement('div');
  iT.classList.add('inbox-tasks');
  taskCont.appendChild(iT);

  const title = document.createElement('div');
  title.classList.add('titles');
  iT.appendChild(title);

  const input = document.createElement('div');
  input.classList.add('input-title-form');
  iT.appendChild(input);

  const form = document.createElement('form');
  form.setAttribute('action', '');
  input.appendChild(form);

  const text = document.createElement('input');
  input.setAttribute('type', 'text');
  text.id = 'input-task';
  form.appendChild(text);

  const showTask = () => {
    const i = addTask.taskLibrary.length - 1;

    const taskBox = document.createElement('div');
    taskBox.classList.add('tasks');
    taskBox.id = `task-${i}`;
    iT.appendChild(taskBox);

    const check = document.createElement('input');
    check.id = 'status';
    check.setAttribute('type', 'checkbox');
    taskBox.appendChild(check);

    const text2 = document.createElement('p');
    text2.textContent = addTask.taskLibrary[i].title;
    taskBox.appendChild(text2);

    const removeTask = () => {
      addTask.taskLibrary.splice(i, 1);
      const delEl = document.getElementById(`task-${i}`);
      delEl.remove();
      console.log(addTask.taskLibrary);
    };

    const del = document.createElement('img');
    del.classList.add('delBtn');
    del.setAttribute('src', 'img/close.png');
    del.addEventListener('click', removeTask);
    taskBox.appendChild(del);
  };

  const addBtn = document.createElement('button');
  addBtn.setAttribute('type', 'submit');
  addBtn.id = 'add-btn';
  addBtn.textContent = 'Add';
  addBtn.addEventListener('click', addTask.addTaskToList);
  addBtn.addEventListener('click', showTask);
  input.appendChild(addBtn);
};
export default createList;
