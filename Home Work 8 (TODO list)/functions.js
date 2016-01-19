/**
 * Created by mainadmin on 06.12.15.
 */

"use strict";

window.onload = function () {
    loadTasksFromLocalStorage();
};

var Task = function (taskText, position, isActive) {
    this.taskText = taskText;
    this.position = position;
    this.isActive = isActive;
};

var addTask = function () {
    var taskText = document.getElementById("taskInput").value;
    var taskList = document.getElementById("list");

    if (taskText) {
        var task = new Task(taskText,taskList.childNodes.length,false);
        showTask(task);
        return task;
    }
    refreshTaskNumbers();
};

var addTaskToLocalStorage = function (task) {
    var taskList = window.localStorage.getItem("taskList");
    if (taskList) {
        var taskList = JSON.parse(taskList);
        taskList.push(task);
        window.localStorage.setItem("taskList", JSON.stringify(taskList));
    } else {
        window.localStorage.setItem("taskList", JSON.stringify([task]));
    }
    refreshTaskNumbers();
};

var loadTasksFromLocalStorage = function () {
    var taskList = window.localStorage.getItem("taskList");
    if (taskList) {
        var taskList = JSON.parse(taskList);
        taskList.forEach(function(task){showTask(task)});
    }
    refreshTaskNumbers();
};

var showTask = function(task) {
    var taskList = document.getElementById("list");
    var taskLine = document.createElement("li");
    taskLine.appendChild(document.createTextNode(task.taskText));
    taskLine.addEventListener("dblclick", function () {
        var editContainer = document.createElement("span");
        editContainer.id = "editContainer"+task.position;
        var editTask = document.createElement("input");

        editTask.type = "text";
        var save = document.createElement("button");
        save.appendChild(document.createTextNode("Save"));
        save.addEventListener("click", function () {
            var taskList = window.localStorage.getItem("taskList");
            if (taskList) {
                var taskList = JSON.parse(taskList);
                for (var i=0; i<taskList.length; i++) {
                    if (taskList[i].position == task.position){
                        taskList[i].taskText = editTask.value;
                    }
                }
                window.localStorage.setItem("taskList", JSON.stringify(taskList));
                task.taskText = editTask.value;
                redrawTaskList();
            }
        });
        var cancel = document.createElement("button");
        cancel.addEventListener("click", function () {
            editContainer.parentNode.removeChild(editContainer);
        });
        cancel.appendChild(document.createTextNode("Cancel"));
        editContainer.appendChild(editTask);
        editContainer.appendChild(save);
        editContainer.appendChild(cancel);
        taskLine.appendChild(editContainer);
    });
    var span = document.createElement("span");
    span.innerHTML = "<input id='box"+task.position+"' type='checkbox' onclick='taskCheck("+task.position+")'/>";
    taskLine.appendChild(span);
    taskList.appendChild(taskLine);
    document.getElementById("taskInput").value = null;
    span = document.createElement("span");
    span.innerHTML = "<a href='#' class='delete' onclick='deleteTask("+task.position+")'> delete</a>";
    taskLine.appendChild(span);
    document.getElementById("box" + task.position).checked = !!task.isActive;
};

var deleteTask = function (position) {
    var taskList = window.localStorage.getItem("taskList");
    if (taskList) {
        var taskList = JSON.parse(taskList);
        for (var i=0; i<taskList.length; i++) {
            if(taskList[i].position >= position) {
                taskList[i].position -= 1;
            }
        }
        taskList.splice(position-1, 1);
        window.localStorage.setItem("taskList", JSON.stringify(taskList));
        redrawTaskList();
    }
};

var taskCheck = function (position) {
    var taskList = window.localStorage.getItem("taskList");
    if (taskList) {
        var taskList = JSON.parse(taskList);
        for (var i=0; i<taskList.length; i++) {
            if(taskList[i].position == position) {
                taskList[i].isActive = !taskList[i].isActive;
            }
        }
        window.localStorage.setItem("taskList", JSON.stringify(taskList));
        redrawTaskList();
    }
};

var redrawTaskList = function () {
    var taskList = document.getElementById("list");
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    loadTasksFromLocalStorage();
    refreshTaskNumbers();
};

var checkAllTasks = function () {
    var taskList = window.localStorage.getItem("taskList");
    if (taskList) {
        var taskList = JSON.parse(taskList);
        for (var i = 0; i < taskList.length; i++) {
            taskList[i].isActive = !!document.getElementById("checkAll").checked;
        }
        window.localStorage.setItem("taskList", JSON.stringify(taskList));
        redrawTaskList();
    }
};

var refreshTaskNumbers = function () {
    var numberOfAllTasks = 0,
        numberOfDone = 0,
        numberOfNotDone = 0;
    var taskList = window.localStorage.getItem("taskList");
    if (taskList) {
        var taskList = JSON.parse(taskList);
        numberOfAllTasks = taskList.length;
        for (var i = 0; i < taskList.length; i++) {
            if (taskList[i].isActive) {
                numberOfDone++;
            }
        }
        numberOfNotDone = numberOfAllTasks - numberOfDone;
    }
    document.getElementById("numberOfAllTasks").textContent = numberOfAllTasks;
    document.getElementById("numberOfDone").textContent = numberOfDone;
    document.getElementById("numberOfNotDone").textContent = numberOfNotDone;
};

var deleteAllDone = function () {
    var taskList = window.localStorage.getItem("taskList");
    if (taskList) {
        var taskList = JSON.parse(taskList);
        for (var i = 0; i < taskList.length; i++) {
            if (taskList[i].isActive) {
                deleteTask(i+1);
                if (i != taskList.length-1) {
                    taskList = JSON.parse(window.localStorage.getItem("taskList"));
                    i--;
                }
            }
        }
    }
};

document.getElementById("checkAll").addEventListener("click", checkAllTasks);
document.getElementById("deleteAllDone").addEventListener("click", deleteAllDone);

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    addTaskToLocalStorage(addTask());
});