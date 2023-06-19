import { displayTask } from './displayTask';

function displayProjects(projects, tasks) {
  // const clone = projects;
  for (let i = 0; i < projects.length; i++) {
    // console.log(projects);
    const PjInput = projects[i];
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

      // const h2 = document.getElementById('project-title-header');
      // h2.textContent = PjInput;
      displayTask(tasks, PjInput);
    });

    // projects.push(PjInput);
    // i++;
    localStorage.setItem('projects', JSON.stringify(projects));

    closeBtn.addEventListener('click', (e) => {
      // console.log('hey');
      newProjectBtn.remove();
      e.stopPropagation();
      for (const j in projects) {
        if (projects[j] == PjInput) {
          projects.splice(j, 1);
        }
      }
      // for (const k in tasks) {
      //   console.log(tasks[k].project, PjInput);
      //   if (tasks[k].project == PjInput) {
      //     tasks.splice(k, 1);
      //     localStorage.setItem('tasks', JSON.stringify(tasks));
      //   }
      // }

      tasks = tasks.filter(task => {
        return task.project !== PjInput;
      })
      localStorage.setItem('tasks', JSON.stringify(tasks));

      localStorage.setItem('projects', JSON.stringify(projects));
      displayTask(tasks, 'General');
    });
  }
}
export { displayProjects };
