const ft_list = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

function loadTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON) {
        try {
            const todos = JSON.parse(todosJSON);
            todos.forEach(todo => addTodoToDOM(todo, false));
        } catch(e) {
            console.error("Error parsing todos from localStorage:", e);
        }
    }
}

function addTodoToDOM(text, save = true) {
    const todo = document.createElement('div');
    todo.className = 'todo';
    todo.textContent = text;

    ft_list.prepend(todo);

    todo.addEventListener('click', () => {
        if (confirm('Do you want to remove this TO DO?')) {
            todo.remove();
            saveTodos();
        }
    });

    if (save) saveTodos();
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll('#ft_list .todo').forEach(todo => {
        todos.push(todo.textContent.trim());
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

newBtn.addEventListener('click', () => {
    const text = prompt('Enter new TO DO:');
    if (text && text.trim() !== '') {
        addTodoToDOM(text.trim());
    }
});

window.onload = loadTodos;
