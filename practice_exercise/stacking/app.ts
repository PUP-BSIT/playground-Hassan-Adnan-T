class Stack<T>{
    private items: T[];

    constructor(){
        this.items = []
    }

    push(item: T):void{
        this.items.push(item);
    }

    pop():T | undefined{
       return this.items.pop();
    }

    peek():T | undefined{
        return this.items[this.items.length - 1];
    }

    isEmpty():boolean{
        if(this.items.length === 0){
            return true;
        }
        else{
            return false;
        }
    }
}

const example1 = new Stack<number>();

example1.push(20);
example1.push(30);
example1.push(50);
console.log("Item that in the top of the stack: ",example1.peek());
console.log(example1)
example1.pop();
console.log("Item that in the top of the stack: ",example1.peek());

console.log("Is empty?", example1.isEmpty()); // Output: false

const example2 = new Stack<string>();

example2.push("Hellow");
example2.push("world");
example2.push("universe");

console.log("Item that in the top of the stack: ",example2.peek());
console.log(example2)
example1.pop();
console.log("Item that in the top of the stack: ",example2.peek());

console.log("Is empty?", example2.isEmpty()); // Output: false