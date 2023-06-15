import './style.css';
import { initializePage } from './initialize';
import 'flowbite';
import { addProject } from './addProject';
import { createTask } from './createTasks';
import { displayTask } from './displayTask';

// initializePage();
// let generalTasks = [];

const addProjectBtn = document.getElementById('addProjectSubmit');
addProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addProject();
});

const addTaskBtn = document.getElementById('createTaskButton');
addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const taskName = document.getElementById('taskName').value;
  const taskDate = document.getElementById('taskDate').value;
  let taskPriority = 'low';
  const taskPriorityHigh = document.getElementById('taskPriorityHigh');
  if (taskPriorityHigh.checked) {
    taskPriority = 'high';
  }

  // console.log(createTask(taskName, taskDate, taskPriority));
  // generalTasks.push(createTask(taskName, taskDate, taskPriority));
  // console.log(generalTasks[0]);
  displayTask(taskName, taskDate, taskPriority);
});