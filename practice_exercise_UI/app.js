var todos = [];
function readList() {
    var itemlist = document.querySelector("#item_list");
    itemlist.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        li.textContent = todo.task;
        itemlist.append(li);
    });
}
function createTodo(task) {
    var newTask = {
        id: todos.length + 1,
        task: task,
        iscomplete: false,
    };
    todos.push(newTask);
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
