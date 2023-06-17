import './style.css';
import { initializePage } from './initialize';
import 'flowbite';
import { addProject } from './addProject';
import { createTask } from './createTasks';
import { displayTask } from './displayTask';

// initializePage();
let tasks = [];
if(localStorage.length > 0) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
}
// tasks = [];
// localStorage.setItem('tasks', JSON.stringify(tasks));
// console.log(tasks)
displayTask(tasks, 'General');

const addProjectBtn = document.getElementById('addProjectSubmit');

addProjectBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  addProject(tasks);

  const addProjectModalClose = document.getElementById('addProjectModalClose');
  addProjectModalClose.click();
});

const addTaskBtn = document.getElementById('createTaskButton');
const currentProject = document.getElementById('project-title-header');

addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const taskName = document.getElementById('taskName').value;
  const taskDate = document.getElementById('taskDate').value;
  let taskPriority = 'low';
  const taskPriorityHigh = document.getElementById('taskPriorityHigh');
  if (taskPriorityHigh.checked) {
    taskPriority = 'high';
  }
  const project = currentProject.textContent;
  // console.log(project);
  // console.log(createTask(taskName, taskDate, taskPriority));
  tasks.push(createTask(taskName, taskDate, taskPriority, project));
  // console.log(generalTasks[0]);
  // displayTask(taskName, taskDate, taskPriority);
  // console.log(tasks)
  displayTask(tasks, project);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  const addTaskModalClose = document.getElementById('addTaskModalClose');
  addTaskModalClose.click();
});

const generalNavBtn = document.getElementById('generalNavBtn');
generalNavBtn.addEventListener('click', () => {
  currentProject.textContent = 'General';
  // console.log(tasks);
  displayTask(tasks, 'General');
});
