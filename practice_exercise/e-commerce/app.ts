class Product {
    name : string;
    price : number;
    quantity : number;

    constructor(name:string, price:number, quantity:number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice(): number {
        return (this.price * this.quantity);
    }

    addToCart(quantity : number): void{
        this.quantity = this.quantity + quantity;
    }

    removeFromCart(quantity : number): void{
        if (this.quantity >= quantity){
            this.quantity -= quantity;
        }
        else {
            console.log("cannot go less than 0");
        }
    }

    overallPrice(quantity:number) : number{
        return this.price * quantity;
    }
}

const product1 = new Product("Iphone XR", 15_000, 5);
const product2 = new Product("MacBook", 100_000, 2);
const product3 = new Product("Maono Mic", 2_000, 10);

product1.addToCart(2);
product2.addToCart(1);
product1.addToCart(2);

console.log("Total Price: ",product1.getTotalPrice());
console.log(product1.quantity);
product1.removeFromCart(2);
console.log(product1.quantity);

const product1price = product1.overallPrice(product1.quantity);
const product2price = product2.overallPrice(product2.quantity);
const product3price = product3.overallPrice(product3.quantity);

const overall = product1price + product2price + product3price;
console.log("Overall Total Price:", overall);