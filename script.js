let taskList = document.getElementById("taskList");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li>
                ${task}
                <button onclick="deleteTask(${index})">X</button>
            </li>
        `;
    });
}
displayTasks();

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value.trim() === "") return;

    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    input.value = "";
}

function deleteTask(i) {
    tasks.splice(i, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}