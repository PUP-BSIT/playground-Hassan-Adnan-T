var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTodo = function (task) {
        var newTodo = {
            id: this.todos.length + 1,
            task: task,
            iscomplete: false
        };
        this.todos.push(newTodo);
    };
    TodoList.prototype.deleteTodo = function (id) {
        var index = this.todos.findIndex(function (todo) { return todo.id === id; });
        if (index != -1) {
            this.todos.splice(index, 1);
            console.log("The todo with an id of ".concat(id, " is deleted"));
        }
        else {
            console.log("the todo with an id of ".concat(id, " is not found"));
        }
    };
    TodoList.prototype.completedTodo = function (id) {
        var todo = this.todos.find(function (todo) { return todo.id === id; });
        if (todo) {
            todo.iscomplete = true;
        }
        else {
            console.log("todo with an id of ".concat(id, " is not foudnd"));
        }
    };
    TodoList.prototype.listTodo = function () {
        console.log("Todo:");
        this.todos.forEach(function (todo) {
            console.log("".concat(todo.id, " ").concat(todo.task, " ").concat(todo.iscomplete));
        });
    };
    return TodoList;
}());
var Todo = new TodoList();
Todo.addTodo("Make a todo list 3 times");
Todo.addTodo("Sleep");
Todo.addTodo("Jump");
Todo.completedTodo(3);
Todo.listTodo();
