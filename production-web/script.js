document.getElementById('add-button').addEventListener('click', () => {
  const task = document.getElementById('task-input').value.trim();
  const date = document.getElementById('date-input').value;
  if (!task || !date) return;
  const tbody = document.getElementById('plan-table-body');
  const tr = document.createElement('tr');
  const tdTask = document.createElement('td');
  tdTask.textContent = task;
  const tdDate = document.createElement('td');
  tdDate.textContent = date;
  tr.appendChild(tdTask);
  tr.appendChild(tdDate);
  tbody.appendChild(tr);
  document.getElementById('task-input').value = '';
  document.getElementById('date-input').value = '';
});
