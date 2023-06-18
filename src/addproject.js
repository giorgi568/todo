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
    'text-base',
    'flex',
    'justify-between',
    'items-center'
  );
  newProjectBtn.textContent = PjInput;

  const closeBtn = document.createElement('button');
  newProjectBtn.appendChild(closeBtn);

  const svgProject = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );
  const svgProjectPath = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  svgProject.setAttribute('viewBox', '0 -960 960 960');
  svgProjectPath.setAttribute(
    'd',
    'm249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z'
  );
  svgProject.classList.add('fill-current', 'w-5', 'h-5', 'm-0');
  svgProject.appendChild(svgProjectPath);

  closeBtn.appendChild(svgProject);

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

  closeBtn.addEventListener('click', (e) => {
    newProjectBtn.remove();
    e.stopPropagation();
  });
}

export { addProject };
