import _ from 'lodash';
import './style.css';
import createList from './List';
import addUserProject from './addProject';

const createBtn = () => {
  const setTitle = (projectName) => {
    const titleProject = document.querySelector('.titles');
    titleProject.textContent = projectName;
  };
  const inboxBtn = document.querySelector('.inbox');
  inboxBtn.addEventListener('click', createList);
  inboxBtn.addEventListener('click', () => {
    setTitle('Inbox');
  });

  const todayBtn = document.querySelector('.today');
  todayBtn.addEventListener('click', createList);
  todayBtn.addEventListener('click', () => {
    setTitle('Today');
  });

  const anytimeBtn = document.querySelector('.anytime');
  anytimeBtn.addEventListener('click', createList);
  anytimeBtn.addEventListener('click', () => {
    setTitle('Anytime');
  });
  const userProj = document.querySelector('.project-users');
  userProj.addEventListener('click', addUserProject);
};
createBtn();
