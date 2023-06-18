function displayTask(tasks, projectName) {
  // for (const task of tasks) {
  //   console.log(task);
  // }
  // console.log(projectName);
  const listOfTasks = document.getElementById('listOfTasks');
  listOfTasks.textContent = '';
  for (const i in tasks) {
    // console.log(tasks[i].project, projectName)
    if (tasks[i].project == projectName) {
      // console.log('fasef');
      let title = tasks[i].title;
      let date = tasks[i].dueDate;
      let taskPriority = tasks[i].priority;

      const taskDiv = document.createElement('div');
      taskDiv.classList.add(
        'w-11/12',
        'bg-slate-500',
        'h-[40px]',
        'rounded-sm',
        'flex',
        'items-center',
        'justify-between',
        'px-2'
      );
      listOfTasks.appendChild(taskDiv);

      const taskBtn = document.createElement('button');
      taskDiv.appendChild(taskBtn);

      const svgTask = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'svg'
      );
      const svgTaskPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
      );
      svgTask.setAttribute('viewBox', '0 -960 960 960');
      svgTaskPath.setAttribute(
        'd',
        'M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z'
      );
      svgTask.classList.add('fill-current', 'w-7', 'h-7', 'mr-2', 'm-0');
      svgTask.appendChild(svgTaskPath);

      taskBtn.appendChild(svgTask);
      taskDiv.appendChild(taskBtn);

      const titleOfTask = document.createElement('div');
      titleOfTask.classList.add('titleOfTask');
      titleOfTask.textContent = title;
      taskDiv.appendChild(titleOfTask);

      const dueDate = document.createElement('div');
      dueDate.classList.add('dueDate');
      dueDate.textContent = date;
      taskDiv.appendChild(dueDate);

      const priority = document.createElement('div');
      priority.classList.add('priority');
      priority.textContent = `priority: ${taskPriority}`;
      taskDiv.appendChild(priority);

      taskBtn.addEventListener('click', () => {
        taskBtn.parentNode.remove();
        tasks.splice(i, 1);
        // console.log(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // console.log(tasks);
      });
    }
  }
}

export { displayTask };
