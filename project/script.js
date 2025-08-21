
document.addEventListener('DOMContentLoaded', () => {
    // grab the elements

    let todoInput = document.getElementById('todo-input');
    let addTaskBtn = document.getElementById('add-task-btn');
    let taskList = document.getElementById('todo-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task) => renderTask(task));

    addTaskBtn.addEventListener('click', function () {
        let taskItem = todoInput.value.trim();
        if (taskItem === "") return;
        console.log(taskItem)

        const newTask = {
            id: Date.now(),
            task: taskItem,
            isCompleted: false,
        }

        tasks.push(newTask)
        saveTask();
        todoInput.value = "";
        console.log(tasks)
    });


    function renderTask(task) {
        console.log(task.text);
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        if (task.isCompleted) li.classList.add('completed')
        li.innerHTML = `
        <span>${task.task}</span>
        <button>delete</button>
        `;

        taskList.appendChild(li);
    }


    function saveTask() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
})
