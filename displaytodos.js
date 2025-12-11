// modules/displayTodos.js
export function displayTodos(todos, container) {
  // Clear container
  container.innerHTML = '';

  const list = document.createElement('ul');
  list.className = 'todo-list';

  // keep it limited for readability (optional)
  todos.slice(0, 30).forEach(todo => {
    const item = document.createElement('li');
    item.className = 'todo-item';
    item.innerHTML = `
      <label>
        <input type="checkbox" ${todo.completed ? 'checked' : ''} disabled />
        <span>${escapeHtml(todo.title)}</span>
      </label>
      <small> (ID: ${todo.id})</small>
    `;
    list.appendChild(item);
  });

  container.appendChild(list);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
