// class Student {
//     public  name : string
//     public age : number
//     public semester : number
// }
// let s1 = new Student();


// question 2
class myStudent {
    public name : string
    public age : number
    public semester : number
    constructor (name : string , age: number , semester: number ){
        this.name = name;
        this.age = age;
        this.semester = semester;
    }

}
let student1 = new myStudent("talha", 20, 3);
let student2 = new myStudent("zain", 22, 5);

console.log(student1 ); 
console.log(student2 );


// Question 3
class Rectangle {
    public length : number
    public breadth : number
    constructor(length : number , breadth : number){
        this.length = length;
        this.breadth = breadth;
    }
    calculateArea(): number {
        return this.length * this.breadth;
    }
    calculatePerimeter(): number {
        return 2 * (this.length + this.breadth);
    }
}

 let rectangle1 = new Rectangle(5, 10);
console.log("Area of rectangle: " + rectangle1.calculateArea());
console.log("Perimeter of rectangle: " + rectangle1.calculatePerimeter());

// question 4
// Create a BankAccount class with:
// - A private property balance, initialized through the constructor.
// - A method deposit(amount) to add money.
// - A method withdraw(amount) to subtract money only if sufficient balance exists.
// - A method getBalance() to return the current balance.
// Create an object, deposit money, withdraw money, and print the final balance.

class BankAccount {
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Insufficient balance");
        }
    }
    getBalance(): number {
        return this.balance;
    }
}

let account = new BankAccount(1000);
account.deposit(500);
console.log("Balance after deposit: " + account.getBalance());
account.withdraw(200);
console.log("Final balance: " + account.getBalance());

// Question 5
// Question 5 — Inheritance
// Create a parent class Animal with:
// - A property name.
// - A constructor to initialize name.
// - A method makeSound() that prints "Animal makes a sound".
// Create a child class Dog that:
// - Inherits from Animal using extends.
// - Overrides the makeSound() method to print "Dog barks".
// - Uses super to call the parent constructor.
// Create a Dog object and call both its name property and makeSound() method.

class Animal {
    public name: string 
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): void {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log("Dog barks");
    }
}

let myDog = new Dog("Buddy");
console.log("Dog's name: " + myDog.name);
myDog.makeSound();