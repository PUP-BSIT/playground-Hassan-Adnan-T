interface Todo {
    id: number;
    task: string;
    iscomplete: boolean;
}

let todos : Todo[] = [];
let todoIdCounter : number = 1;

function readList():void{
    const itemlist = document.querySelector("#item_list") as HTMLElement;
    itemlist.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li") as HTMLElement;
        li.textContent = todo.task;

        const completeButton = document.createElement("button") as HTMLButtonElement;
        completeButton.textContent = "Complete";
        completeButton.addEventListener('click', () => {
            if(li.style.textDecoration === 'line-through'){
                li.style.textDecoration = 'none';
                this.iscomplete = false;
            }
            else{
                li.style.textDecoration = 'line-through'
                this.iscomplete = true;
            }
            
        })

        const deleteButton = document.createElement("button") as HTMLButtonElement;
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener('click', () => {
            li.remove();
        })

        li.append(deleteButton);
        li.append(completeButton);
        itemlist.append(li);
    })


}

function createTodo(task:string): void{
    const newTask : Todo = {
        id : todoIdCounter++,
        task : task,
        iscomplete : false,
    }
    
    todos.push(newTask);
    readList();
}

function deleteTodo(id:number): void {
    todos = todos.filter(todo => todo.id !== id);
    readList();
}

const addButton = document.querySelector("#add_button") as HTMLButtonElement;
addButton.addEventListener('click', () =>{
    const itemTaskInput = document.querySelector('#input') as HTMLInputElement;
    const itemTask = itemTaskInput.value.trim();

    if(itemTask){
        createTodo(itemTask);
        itemTaskInput.value = '';
    }
});

readList();