import { displayTask } from './displayTask';

function addProject(tasks) {
  const PjInput = document.getElementById('createProjectInput').value;
  if (PjInput.length < 1 || PjInput.length > 10) {
    return false;
  }

  const listOfProjects = document.getElementById('listOfProjects');

  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add(
    'bg-transparent',
    'hover:bg-slate-600',
    'text-slate-900',
    'font-semibold',
    'hover:text-white',
    'py-2',
    'px-4',
    'border',
    'border-slate-600',
    'hover:border-transparent',
    'rounded',
    'text-base'
  );
  newProjectBtn.textContent = PjInput;
  listOfProjects.appendChild(newProjectBtn);
  newProjectBtn.addEventListener('click', () => {
    // const rightPanel = document.getElementById('right-panel');
    // rightPanel.textContent = '';

    // const h2 = document.createElement('h2');
    // h2.textContent = PjInput;
    // h2.classList.add('font-bold', 'text-5xl');
    // rightPanel.appendChild(h2);
    const h2 = document.getElementById('project-title-header');
    h2.textContent = PjInput;
    displayTask(tasks, PjInput);
  });
}

export { addProject };
