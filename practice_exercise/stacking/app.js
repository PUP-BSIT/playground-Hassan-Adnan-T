var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        if (this.items.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Stack;
}());
var example1 = new Stack();
example1.push(20);
example1.push(30);
example1.push(50);
console.log("Item that in the top of the stack: ", example1.peek());
console.log(example1);
example1.pop();
console.log("Item that in the top of the stack: ", example1.peek());
console.log("Is empty?", example1.isEmpty()); // Output: false
var example2 = new Stack();
example2.push("Hellow");
example2.push("world");
example2.push("universe");
console.log("Item that in the top of the stack: ", example2.peek());
console.log(example2);
example1.pop();
console.log("Item that in the top of the stack: ", example2.peek());
console.log("Is empty?", example2.isEmpty()); // Output: false
