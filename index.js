const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');

// Add Task
addBtn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task !== "") {
        addTodo(task);
        input.value = "";
    }
});

// Add Todo Function
function addTodo(task) {
    const li = document.createElement('li');

    // Task Text
    li.textContent = task;

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(deleteBtn);

    // Toggle Completed
    li.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') {
            li.classList.toggle('completed');
        }
    });

    // Delete Task
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    todoList.appendChild(li);
}

// Clear Completed Tasks
clearBtn.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('#todo-list li.completed');
    completedTasks.forEach(task => task.remove());
});

// Optional: Add task with Enter key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
