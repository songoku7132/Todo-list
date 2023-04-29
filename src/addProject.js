import createList from './List';

const addUserProject = () => {
  const addUserBtn = document.querySelector('.users-projects');

  const input2 = document.createElement('div');
  input2.classList.add('input-title-form2');
  addUserBtn.appendChild(input2);

  const form2 = document.createElement('form');
  form2.setAttribute('action', '');
  input2.appendChild(form2);

  const text2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  text2.id = 'input-title';
  form2.appendChild(text2);

  //   const setTitle = () => {
  //     const $proTitle = document.querySelector('.user-text');
  //     const titleProject = document.querySelector('.titles');
  //     titleProject.innerText = $proTitle.innerHTML;
  //   };
  const addButton = () => {
    const $proTitle = document.querySelector('#input-title');

    const newPro = document.createElement('div');
    newPro.classList.add('project-user-title');
    newPro.addEventListener('click', createList);
    addUserBtn.appendChild(newPro);

    const newProText = document.createElement('p');
    newProText.classList.add('user-text');
    newProText.textContent = $proTitle.value;

    newPro.appendChild(newProText);

    const del = document.querySelector('.input-title-form2');
    del.remove();
  };

  const addBtn = document.createElement('button');
  addBtn.setAttribute('type', 'submit');
  addBtn.id = 'add-btn';
  addBtn.textContent = 'Add';
  addBtn.addEventListener('click', addButton);
  //   addBtn.addEventListener('click', setTitle);

  input2.appendChild(addBtn);
};
export default addUserProject;
