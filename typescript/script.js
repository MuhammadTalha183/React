"use strict";
// 30 practice  questions  of coding in the Typescript
// Q 1: Write a function that takes two numbers as arguments and returns their sum.
function addNumbers(a, b) {
    return a + b;
}
addNumbers(5, 10); // Output: 15
// Q2 Datatypes in TypeScript
// TypeScript supports various data types including:
// 1. Number
let num = 42;
// 2. String
let str = "Hello, World!";
// 3. Boolean
let isTrue = true;
// 4. Array
let arr = [1, 2, 3, 4, 5];
// 5. Tuple
let tuple = ["Alice", 30];
// 6. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Red;
// type Annotations in TypeScript
// Type annotations allow you to explicitly specify the type of a variable or function parameter. 
// This helps catch errors at compile time and improves code readability.
// Q3: Write a function that takes a string as an argument and returns its length.
function getStringLength(str) {
    return str.length;
}
getStringLength("Hello, World!"); // Output: 13
// variables 
let x = 5;
let y = "Hello";
let z = true;
console.log(x); // Output: 5
console.log(y); // Output: Hello
console.log(z); // Output: true
// Array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
// Array of tuples
let person = ["Alice", 30];
// Array of objects
let users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
// Mixed array
let mixedArray = [1, "Hello", true, 3.14];
// mixed array of objects
let mixedObjects = [
    { id: 1, name: "Alice", isActive: true },
    { id: 2, name: "Bob", isActive: false },
    { id: 3, name: "Charlie", isActive: true }
];
