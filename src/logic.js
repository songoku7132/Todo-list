const addTask = (() => {
  const taskLibrary = [];

  function Tasks(title) {
    this.title = title;
  }
  const addTaskToList = () => {
    const $title = document.getElementById('input-task');
    const taskTitle = $title.value;
    const newTask = new Tasks(taskTitle);
    taskLibrary.push(newTask);
    console.log(taskLibrary);
  };
  const removeTaskFromList = () => {

  };
  return {
    addTaskToList, Tasks, taskLibrary, removeTaskFromList,
  };
})();

export default addTask;
