interface todo {
    id : number;
    task : string;
    iscomplete : boolean;
}

class TodoList {

    private todos : todo[] = []

    addTodo(task : string) : void {
        const newTodo : todo  = {
            id : this.todos.length + 1,
            task,
            iscomplete : false
        }
        this.todos.push(newTodo);
    }

    deleteTodo(id : number) : void{
        const index = this.todos.findIndex(todo => todo.id === id)

        if(index != -1){
            this.todos.splice(index, 1)
            console.log(`The todo with an id of ${id} is deleted`)
        }
        else {
            console.log(`the todo with an id of ${id} is not found`)
        }
    }

    completedTodo(id : number):void{
        const todo = this.todos.find(todo => todo.id === id)
        if(todo){
            todo.iscomplete = true;
        }
        else{
            console.log(`todo with an id of ${id} is not foudnd`)
        }
    }

    listTodo(){
        console.log("Todo:")
        this.todos.forEach(todo => {
            console.log(`${todo.id} ${todo.task} ${todo.iscomplete}`)
        })
    }

}

const Todo = new TodoList();
Todo.addTodo("Make a todo list 3 times");
Todo.addTodo("Sleep");
Todo.addTodo("Jump");
Todo.completedTodo(3);
Todo.listTodo();
Todo.addTodo("delete this");
Todo.deleteTodo(3);