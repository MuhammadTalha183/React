// 30 practice  questions  of coding in the Typescript

// Q 1: Write a function that takes two numbers as arguments and returns their sum.
function addNumbers(a: number, b: number): number {
    return a + b;
}
addNumbers(5, 10); // Output: 15

// Q2 Datatypes in TypeScript
// TypeScript supports various data types including:
// 1. Number
let num: number = 42;

// 2. String
let str: string = "Hello, World!";

// 3. Boolean
let isTrue: boolean = true;

// 4. Array
let arr: number[] = [1, 2, 3, 4, 5];

// 5. Tuple
let tuple: [string, number] = ["Alice", 30];

// 6. Enum
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Red;

// type Annotations in TypeScript
// Type annotations allow you to explicitly specify the type of a variable or function parameter. 
// This helps catch errors at compile time and improves code readability.

// Q3: Write a function that takes a string as an argument and returns its length.
function getStringLength(str: string): number {
    return str.length;
}

getStringLength("Hello, World!"); // Output: 13


// variables 
let x: number = 5;
let y: string = "Hello";
let z: boolean = true;

console.log(x); // Output: 5
console.log(y); // Output: Hello
console.log(z); // Output: true

// Array
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Cherry"];

// Array of tuples
let person: [string, number] = ["Alice", 30];

// Array of objects
let users: { name: string; age: number }[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

// Mixed array
let mixedArray: (number | string | boolean)[] = [1, "Hello", true, 3.14];

// mixed array of objects
let mixedObjects: { id: number; name: string; isActive: boolean }[] = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: true }
];