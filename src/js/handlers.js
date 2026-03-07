import { nanoid } from 'nanoid';
import { renderTask } from './render-tasks';

export function onHeaderFormSubmit(e) {
  e.preventDefault();
  const { taskName, taskDescription } = e.target.elements;

  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('Заповніть поля форми');
    return;
  }
  const task = {
    name: taskName.value.trim(),
    description: taskDescription.value.trim(),
    id: nanoid(),
  };
  renderTask(task);
  e.target.reset();
}
