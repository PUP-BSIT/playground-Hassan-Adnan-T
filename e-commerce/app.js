var Product = /** @class */ (function () {
    function Product(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.getTotalPrice = function () {
        return (this.price * this.quantity);
    };
    Product.prototype.addToCart = function (quantity) {
        this.quantity = this.quantity + quantity;
    };
    Product.prototype.removeFromCart = function (quantity) {
        if (this.quantity >= quantity) {
            this.quantity -= quantity;
        }
        else {
            console.log("cannot go less than 0");
        }
    };
    Product.prototype.overallPrice = function (quantity) {
        return this.price * quantity;
    };
    return Product;
}());
var product1 = new Product("Iphone XR", 15000, 5);
var product2 = new Product("MacBook", 100000, 2);
var product3 = new Product("Maono Mic", 2000, 10);
product1.addToCart(2);
product2.addToCart(1);
product1.addToCart(2);
console.log("Total Price: ", product1.getTotalPrice());
console.log(product1.quantity);
product1.removeFromCart(2);
console.log(product1.quantity);
var product1price = product1.overallPrice(product1.quantity);
var product2price = product2.overallPrice(product2.quantity);
var product3price = product3.overallPrice(product3.quantity);
var overall = product1price + product2price + product3price;
console.log("Overall Total Price:", overall);
