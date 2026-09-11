/*
Use "script.js" to implement the interactive behavior.

You will need to work with:
•	variables 👍
•	arrays 👍
•	objects 
•	functions 👍
•	event listeners 👍
•	DOM elements 

Also need references to: 👍
•	the task input 👍
•	the priority input 👍
•	the task display area 👍
*/

//Step 1: Use JavaScript to obtain references to the form and its controls.

const form = document.querySelector("#task-form");
const priority = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");

//Use an array to store the tasks while the page is open.
const tasks = [];

/*
Step 2: Store tasks
Each task should contain at least:
•	a task name
•	a priority
•	a completion status
*/

//Step 3 – Respond to Form Submission
//Use an event listener to detect when the user submits the form.

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your code here.

//Do not create a task if the task name is empty.
    if (taskInput.value === ""){
        return;
    }

//Read the values entered by the user
//if(taskInput.value.valid){
const taskName = taskInput.value;
const taskPriority = priorityInput.value;
//}

//Step 4 – Add the Task
//Create an object containing the task information and add it to your array.
tasks.push({name: taskName,
            priority: taskPriority,
            completed: false});

displayTasks();

});

//Step 5 – Display Tasks
//Create a function that displays the current tasks.
/*Each task displayed on the page must show:
•	the task name
•	its priority
•	a Complete button
•	a Delete button
*/
function displayTasks() {

  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const taskElement = document.createElement("div");
    taskElement.textContent = tasks[i].name + " - " + tasks[i].priority;

/*
Step 6 – Complete a Task
When the user clicks the Complete button:
1. Change the task's completion status.
2. Update its appearance on the page.

taskElement.classList.add("completed");
*/

    if (tasks[i].completed) {
      taskElement.classList.add("completed");
    }

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function () {
      tasks[i].completed = !tasks[i].completed;
      displayTasks();
    };

/*
Step 7 – Delete a Task
When the user clicks the Delete button:
1. Remove the task.
2. Update the displayed task list.
*/
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      tasks.splice(i, 1);
      displayTasks();
    };

    taskElement.appendChild(completeButton);
    taskElement.appendChild(deleteButton);
    taskList.appendChild(taskElement);
  }
}