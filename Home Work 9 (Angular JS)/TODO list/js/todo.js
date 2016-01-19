/**
 * Created by mainadmin on 16.01.16.
 */

angular.module("todoApp", [])
    .controller("TODOController", function () {
        var todo = this;

        todo.list = [];
        todo.addTODO = function () {
            if (todo.text) {
                var newTask = new Task(todo.text);
                todo.list.push(newTask);
                addTaskToLocalStorage(newTask);
                todo.text = "";
            }
        };

        todo.uploadData = function () {
            if (document.localStorage.getItem("todoList")) {

            }
        };

        todo.delete = function (id) {
            todo.list.splice(findIndexById(id), 1);
        };

        var Task = function (text) {
            this.id = todo.list.length;
            this.text = text;
            this.done = false;
            this.position = null;
        };

        //TODO: need implement
        var addTaskToLocalStorage = function (task) {
                    
        };

        var findIndexById = function (id) {
            todo.list.forEach(function (el,i) {
                if (el.id == id) {
                    return i;
                }
            });
        }
});
