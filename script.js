const tasks = [];

document.getElementById("task-form").addEventListener('submit', function(event) {
    event.preventDefault();

    // getting values
   const taskName = document.getElementById('task-name').value;
   const taskDescription = document.getElementById('task-name').value;
   const dueDate = document.getElementById('task-name').value;

/   //  task object
    const newTask = {
        name: taskName,
        description: taskDescription,
        dueDate: dueDate
    };

    // pushing task data in Tasks array
    tasks.push(newTask);

    //empty form inputs
    document.getElementById('task-form').reset();

    displayTasks();
});

// For Displaying the Tasks in the Task list

displayTasks() {
   const taskList = document.getElementById('task-list');
   taskList.innerHTML = ''; // resetting to null in the begining

   tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <strong>${task.name}</strong> <br>
        ${task.description} <br>
        <small>Due Date: ${task.dueDate}</small> <br>
        <button onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(taskItem);
});
}

