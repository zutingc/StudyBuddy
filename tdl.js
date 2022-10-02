var taskInput = document.getElementById("new-task"); //Add a new task.
var addButton = document.getElementById("add-button"); //first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //ul of #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New task list item
var createNewTaskElement = function (taskString) {

	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input"); //checkbx
	//label
	var label = document.createElement("label"); //label
	//input (text)
	var editInput = document.createElement("input"); //text
	//button.edit
	var editButton = document.createElement("a"); //edit button

	//button.delete
	var deleteButton = document.createElement("a"); //delete button

	label.innerText = taskString;
	label.classList.add("taskLabel");
	editInput.classList.add("taskLabel");

	//Each elements, needs appending
	checkBox.type = "checkbox";
	editInput.type = "text";
	console.log(editInput);

	editButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>';
	//innerText encodes special characters, HTML does not.
	editButton.classList.add("edit", "taskBtn");
	deleteButton.innerHTML = '<a style="margin-left: 15px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg></a>';
	deleteButton.classList.add("delete", "taskBtn");


	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}

var addTask = function () {
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem = createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";

}

//Edit an existing task.


var editTask = function () {
	// console.log("Edit Task...");
	// console.log("Change 'edit' to 'save'");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector("label");
	var containsClass = listItem.classList.contains("editMode");
	//If class of the parent is .editmode
	if (containsClass) {
		//switch to .editmode
		//label becomes the inputs value.
		label.innerText = editInput.value;
	} else {
		editInput.value = label.innerText;
	}

	//toggle .editmode on the parent.
	listItem.classList.toggle("editMode");
}


//Delete task.
var deleteTask = function () {
	console.log("Delete Task...");

	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(listItem);

}

//Mark task completed
var taskCompleted = function () {
	console.log("Complete Task...");

	//Append the task list item to the #completed-tasks
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

}

var taskIncomplete = function () {
	console.log("Incomplete Task...");
	//Mark task as incomplete.
	//When the checkbox is unchecked
	//Append the task list item to the #incomplete-tasks.
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

var ajaxRequest = function () {
	console.log("AJAX Request");
}

//Set the click handler to the addTask function.
addButton.onclick = addTask;
taskInput.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		document.getElementById("add-button").click();
	}
});
// addButton.addEventListener("click",ajaxRequest);

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	console.log("bind list item events");
	//select ListItems children
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("a.edit");
	var deleteButton = taskListItem.querySelector("a.delete");


	//Bind editTask to edit button.
	editButton.onclick = editTask;
	//Bind deleteTask to delete button.
	deleteButton.onclick = deleteTask;
	//Bind taskCompleted to checkBoxEventHandler.
	checkBox.onchange = checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
//for each list item
for (var i = 0; i < incompleteTaskHolder.children.length; i++) {

	//bind events to list items chldren(tasksCompleted)
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i++) {
	//bind events to list items chldren(tasksIncompleted)
	bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}