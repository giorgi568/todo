function createTask(
  title,
  description,
  dueDate,
  priority,
  project = 'general',
  status = 'active'
) {
  return {
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    project: project,
    status: status,
  };
}
// let task1 = createTask(
//   'play chess',
//   'play chess on chess.com',
//   '5/6/2023',
//   'low',
// );
// console.log(task1)
// console.log(task1.description)
export { createTask };
