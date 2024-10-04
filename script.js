const tasks = [];

document.getElementById("taskForm").addEventListener('submit', function(event) {
    event.preventDefault();

    // getting values
   const taskName = document.getElementById('task-name').value;
   const taskDescription = document.getElementById('description').value;
   const dueDate = document.getElementById('due-date').value;

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

function displayTasks() {
   const taskList = document.getElementById('task-list');
   taskList.innerHTML = ''; // resetting to null in the begining

   tasks.forEach((task, index) => {
    const { name, description, dueDate } = task; //destructuring task object

    // Create a table row
    const row = document.createElement('tr');

    row.innerHTML = `
            <td>${name}</td>
            <td>${description}</td>
            <td>${dueDate}</td>
            <td><button onclick="removeTask(${index})">Remove</button></td>
        `;
    
    taskList.appendChild(row);
});
}

// function for Removing task
function removeTask(index) {
    tasks.splice(index, 1); // Remove the task at the given index
    displayTasks(); // Update the displayed task list
}

// need to destructure and display the array



