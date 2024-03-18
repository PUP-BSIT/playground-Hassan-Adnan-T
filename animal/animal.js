var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeSound = function () {
        console.log("animal sound");
    };
    Animal.prototype.printDetails = function (name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.makeSound();
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Arf Arf");
    };
    Dog.prototype.printDetails = function (name, age, breed) {
        _super.prototype.printDetails.call(this, name, age, "Dog");
        this.breed = breed;
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log("meow meow");
    };
    Cat.prototype.printDetails = function (name, age, color) {
        _super.prototype.printDetails.call(this, name, age, "Cat");
        this.color = color;
    };
    return Cat;
}(Animal));
var Dog1 = new Dog();
var Cat1 = new Cat();
Dog1.printDetails("Cat", 2, "sd");
console.log("".concat(Dog1.name, " ").concat(Dog1.age, " ").concat(Dog1.breed));
Dog1.makeSound();
Cat1.makeSound();
