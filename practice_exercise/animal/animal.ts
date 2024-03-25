class Animal {

    name : string;
    age : number;
    species : string;

    makeSound(): void {
        console.log("animal sound");
    }

    printDetails(name:string , age :number, species : string):void{
        this.name = name;
        this.age = age;
        this.species = species;
    }
}

class Dog extends Animal {
    breed : string;

    makeSound(): void {
        console.log("Arf Arf");
    }

    printDetails(name: string, age: number, breed: string) {
        super.printDetails(name,age,"Dog");
        this.breed = breed;
    }
    
}

class Cat extends Animal {
    color : string;

    makeSound(): void {
        console.log("meow meow")
    }

    printDetails(name: string, age: number, color: string) {
        super.printDetails(name,age,"Cat");
        this.color = color;
    }


}

const Dog1 = new Dog();
const Cat1 = new Cat();

Dog1.printDetails("Cat", 2, "sd");
console.log(`${Dog1.name} ${Dog1.age} ${Dog1.breed}`)

Dog1.makeSound();
Cat1.makeSound();