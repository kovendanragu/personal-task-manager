const tasks = [];

document.getElementById("taskForm").addEventListener('submit', function(event) {
    event.preventDefault();

    // getting values
   const taskName = document.getElementById('task-name').value;
   const taskDescription = document.getElementById('description').value;
   const dueDate = document.getElementById('due-date').value;

/   //  task object

    const newTask = {
        name: taskName,
        description: taskDescription,
        dueDate: dueDate
    };

    // pushing task data in Tasks array
    tasks.push(newTask);

    //empty form inputs
    document.getElementById('taskForm').reset();

    displayTasks();
});

// For Displaying the Tasks in the Task list

displayTasks() {
   const taskList = document.getElementById('task-list');
   taskList.innerHTML = ''; // resetting to null in the begining

   tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <strong>Name:${task.name} </strong><br>
        Task Description:${task.description} <br>
        Due Date: ${task.dueDate} <br>
        <button onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(taskItem);
});
}


