var todos = [];
var todoIdCounter = 1;
function readList() {
    var _this = this;
    var itemlist = document.querySelector("#item_list");
    itemlist.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        li.textContent = todo.task;
        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener('click', function () {
            if (li.style.textDecoration === 'line-through') {
                li.style.textDecoration = 'none';
                _this.iscomplete = false;
            }
            else {
                li.style.textDecoration = 'line-through';
                _this.iscomplete = true;
            }
        });
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', function () {
            li.remove();
        });
        li.append(deleteButton);
        li.append(completeButton);
        itemlist.append(li);
    });
}
function createTodo(task) {
    var newTask = {
        id: todoIdCounter++,
        task: task,
        iscomplete: false,
    };
    todos.push(newTask);
    readList();
}
function deleteTodo(id) {
    todos = todos.filter(function (todo) { return todo.id !== id; });
    readList();
}
var addButton = document.querySelector("#add_button");
addButton.addEventListener('click', function () {
    var itemTaskInput = document.querySelector('#input');
    var itemTask = itemTaskInput.value.trim();
    if (itemTask) {
        createTodo(itemTask);
        itemTaskInput.value = '';
    }
});
readList();
