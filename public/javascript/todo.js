document.querySelector('.add-btn').addEventListener('click', function() {
    const todoInput = document.querySelector('.todo-input')
    const todoText=todoInput.value.trim();
    // const Listinput = document.querySelector('.List-input').value.trim();
    // const addInput = document.querySelector('.add-input').value.trim();
    // const pasinput = document.querySelector('.pas-input').value.trim();
    // const pleinput = document.querySelector('.ple-input').value.trim();

    if (todoText !==''){
        const todoList = document.querySelector('.todo-list');

        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        const todoSpan = document.createElement('span');
        todoSpan.textContent = todoText;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(todoSpan);
        todoItem.appendChild(deleteBtn);

        todoList.appendChild(todoItem);

        todoInput .value='';
    }
});