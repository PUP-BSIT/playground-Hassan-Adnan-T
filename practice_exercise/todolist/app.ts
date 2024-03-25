interface Todo {
    id : number;
    task : string;
    completed : Boolean;
}

class TodoList {

    private todos : Todo[] = []

    addTodo(task:string): void {
        const newTodo : Todo = {
            id : this.todos.length + 1,
            task,
            completed : false
        };
        this.todos.push(newTodo);
    }

    completedTodo(id : number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo){
            todo.completed = true;
        }
        else{
            console.log(`Todo with id ${id} not found`)
        }
    }

    listTodo(): void{
        console.log("Todos:");
        this.todos.forEach(todo =>{
            console.log(`ID: ${todo.id}, Task: ${todo.task}, Completed ${todo.completed}`)
        });
    }

    deleteTodo(id: number): void{
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index != -1){
            this.todos.splice(index, 1);
            console.log(`todo with id ${id} deleted`)
        }
        else{
            console.log(`todo with id ${id} is not found`)
        }
    }
}

const todoList = new TodoList();
todoList.addTodo("Pratice Programming everyday");
todoList.addTodo("Push up 20");
todoList.addTodo("Research about daisyUI");
todoList.completedTodo(2);
todoList.listTodo();
todoList.deleteTodo(2);
todoList.listTodo();