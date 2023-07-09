// initilizing empty todo list
let todos = [];

// function where all todos will get displayed
function renderTodoList() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    // showing empty message when thare are no todos
    document.getElementById('empty-card').style.display = todos.length === 0 ? 'block' : 'none';

    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item-card';

        const textInput = document.createElement('p');
        textInput.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        textInput.innerHTML = todo.text;
        textInput.value = todo.text;

        const markButton = document.createElement('button');
        markButton.innerText = todo.completed ? 'Mark Incomplete' : 'Mark Completed';
        markButton.className = todo.completed ? 'mark-incomplete-button' : 'mark-complete-button';
        markButton.addEventListener('click', () => markCompleteIncomplete(index));

        const updateButton = document.createElement('button');
        updateButton.innerText = 'Update';
        updateButton.className = 'update-button';
        updateButton.addEventListener('click', () => updateTodoItem(index));
        updateButton.classList.add(todo.completed ? 'hidden' : 'update-button');

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => deleteTodoItem(index));
        deleteButton.classList.add(todo.completed ? 'hidden' : 'delete-button');

        todoItem.appendChild(textInput);
        todoItem.appendChild(markButton);
        todoItem.appendChild(updateButton);
        todoItem.appendChild(deleteButton);

        todoList.appendChild(todoItem);
    });
}

// function for adding new todo with handling error case
function addTodoItem() {
    const todoInput = document.getElementById('new-todo');
    const todoText = todoInput.value.trim();
    document.getElementById('error-info').style.display = 'none';

    if (todoText) {
        todos.push({
            text: todoText,
            completed: false
        });
        // resetting input box value
        todoInput.value = '';
        renderTodoList();
    } else {
        document.getElementById('error-info').style.display = 'block';
    }
}

// mark todo as complete or incomplete
function markCompleteIncomplete(index) {
    todos[index].completed = !todos[index].completed;
    renderTodoList();
}

// function to update the text of a todo item
function updateTodoText(index, newText) {
    newText = newText.trim();

    if (newText) {
        todos[index].text = newText;
        renderTodoList();
    }
}

// function to manually update a todo item
function updateTodoItem(index) {
    const newText = prompt('Enter text to be updated', todos[index].text);
    if (newText !== null) {
        const trimmedText = newText.trim();
        if (trimmedText) {
            todos[index].text = trimmedText;
            renderTodoList();
        }
    }
}

// function to delete a todo item
function deleteTodoItem(index) {
    todos.splice(index, 1);
    renderTodoList();
}

// add button event listener
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addTodoItem);

// initial rendering of the todo list
renderTodoList();