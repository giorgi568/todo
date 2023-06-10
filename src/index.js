import './style.css';
import { initializePage } from './initialize';
import 'flowbite';
import { addProject } from './addproject';

// initializePage();

const addProjectbtn = document.getElementById('addProjectSubmit');
addProjectbtn.addEventListener('click', (e) => {
  e.preventDefault();
  addProject();
});
