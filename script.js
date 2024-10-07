let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

document.getElementById("taskForm").addEventListener('submit', function(event) {
    event.preventDefault();

    // getting values
   const taskName = document.getElementById('task-name').value;
   const taskDescription = document.getElementById('description').value;
   const dueDate = document.getElementById('due-date').value;

    const newTask = {
        name: taskName,
        description: taskDescription || 'Not Mentioned', //if no value
        dueDate: dueDate
    };

    // pushing task data in Tasks array
    tasks.push(newTask);

    //local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    //empty form inputs
    document.getElementById('taskForm').reset();

    displayTasks();
});

// For Displaying the Tasks in the Task list
function displayTasks() {
    const displayTaskItem = document.getElementById('display-task-item');
    const taskContainer = document.querySelector('.task-header');
    displayTaskItem.innerHTML = ''; // resetting to null in the begining

    if (tasks.length > 0) {
        taskContainer.style.display = 'grid'; // has value display
    } else {
        taskContainer.style.display = 'none'; // Hide if no value
    }

   tasks.forEach((task, index) => {
    const { name, description, dueDate } = task; //destructuring task object

     const taskRow = document.createElement('div');
     taskRow.className = 'task-container';

     taskRow.innerHTML = `
        <div>
            <input type="checkbox" id="checkbox-task3" name="task" class="custom-checkbox">
        </div>
        <div>${name}</div>
        <div>${description} </div>
        <div>${dueDate}</div>
        <div>
            <button class="remove-btn" onclick="removeTask(${index})">🗑️</button>
        </div>
    `;
    
    displayTaskItem.appendChild(taskRow);

});
}

// function for Removing task
function removeTask(index) {
    tasks.splice(index, 1); // Remove the task at the given index

    //update local storage after task removed
    localStorage.setItem('tasks', JSON.stringify(tasks));

    displayTasks(); // Update the displayed task list
}

window.onload = function() {
    displayTasks();
}