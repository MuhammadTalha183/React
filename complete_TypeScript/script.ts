// # TypeScript Complete Practice Question Bank
// ## Level 1 — Basic Types

// ### Q1. Primitive Types
// Create variables for a student's name, age, CGPA, enrollment status, and an optional value that can be either a string or undefined. Explicitly assign suitable TypeScript types.
let my_name : string = "Talha"; 
let age : number = 20;
let cgpa : number = 3.5; 
let isEnrolled : boolean = true;
let phone : string | undefined = undefined;
console.log(`Name: ${my_name}, Age: ${age}, CGPA: ${cgpa}, Enrolled: ${isEnrolled}, Phone: ${phone}`);
// ### Q2. Arrays
// Create an array of five subject names and an array of five marks. Explicitly define their types. 
 let subjects : string[] = ["Math", "Physics", "Chemistry", "Biology", "English"];
let marks : number[] = [85, 90, 78, 92, 88];

console.log(`Subjects: ${subjects}`);
console.log(`Marks: ${marks}`);

// ### Q3. Tuples
// Create a tuple representing a student with the following values: student ID (number), name (string), and isEnrolled (boolean). Assign valid values and access each element.
let student : [number, string, boolean] = [12345, "Talha", true];
console.log(`Student: ID: ${student[0]}, Name: ${student[1]}, Enrolled: ${student[2]}`);
// ### Q4. Enums
// Create an enum called `OrderStatus` with `Pending`, `Processing`, `Shipped`, and `Delivered`. Create an order and update its status from Pending to Shipped.
enum OrderStatus {
    Pending,
    Processing,
    Shipped,
    Delivered
}
let orderStatus : OrderStatus = OrderStatus.Pending;
console.log(`Initial Order Status: ${OrderStatus[orderStatus]}`);
orderStatus = OrderStatus.Shipped;
console.log(orderStatus);

// ### Q5. Any
// Create a variable of type `any`. Assign it a number, then a string, and finally call a string method on it. Observe why `any` removes type safety.
let anyValue: any = 5;
anyValue = "Hello";
// anyValue.toUpperCase(); 
// ### Q6. Unknown
// Create a variable of type `unknown`. Assign it a string. Before accessing its length or calling a string method, safely check its type using `typeof`.
let unknownValue: unknown = "Hello, TypeScript!";
if (typeof unknownValue === "string") {
    console.log(`Length of string: ${unknownValue.length}`);
    console.log(`Uppercase: ${unknownValue.toUpperCase()}`);
}
// ### Q7. Void and Never
// Create a function with a `void` return type that prints a message. Then create a function with a `never` return type that always throws an error.

function logMessage(): void {
    console.log("This is a log message.");
}

// function throwError(): never {
//     throw new Error("This function always throws an error.");
// }

logMessage();
// throwError();

// ### Q8. Object Types
// Create an object representing a product with an ID, name, price, and availability status. Define its object type explicitly.
type Product = {
    id: number;
    name: string;
    price: number;
    isAvailable: boolean;
};

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
    isAvailable: true
};

// ### Q9. Union and Literal Types
// Create a variable that accepts a user ID as either a number or a string. Then define a variable that accepts only the literal values `"beginner"`, `"intermediate"`, or `"advanced"`.
let userId: number | string = 12345;
userId = "user_67890";
const userLevel: "beginner" | "intermediate" | "advanced" = "intermediate";
// ### Q10. Type Aliases for Basic Types
// Create type aliases named `StudentID` and `Grade`. Use them to declare variables for a student's ID and grade.
let studentId: StudentID = 101;
type StudentID = number;
type Grade = "A" | "B" | "C" | "D" | "F";
let studentGrade: Grade = "B";
console.log(`Student ID: ${studentId}, Grade: ${studentGrade}`);

// ## Level 2 — Type Inference and Type Annotations

// ### Q11. Type Inference
// Declare variables for a name, age, and active status without explicitly writing their types. Observe which types TypeScript infers.

let my_first_name = "Talha"
let my_age = 21
let my_status = false 
// ### Q12. Type Annotations
// Create a function that accepts two numbers and returns their sum. Explicitly annotate its parameters and return type.
function sun (a:number, b: number): number {
    return a + b;
}
let funResponce = sun(5, 10);
console.log(`Sum: ${funResponce}`);
// ### Q13. Inference in Arrays
// Create an array of numbers without specifying its type. Try adding a string and observe the compiler's response.


let my_arr = [1, 2, 3, 4, 5];

console.log("array of numbers ", my_arr);
// my_arr.push("6");
console.log("array of numbers after adding string ", my_arr);

// ### Q14. Inference in Functions
// Create an arrow function that multiplies two numbers. Allow TypeScript to infer the return type from the function body.
const my_arrow = (a : number , b: number )=>{
    return a * b
}
let check_infer = my_arrow(5,5)
// ### Q15. Type Narrowing
// Create a function that accepts `string | number`. Use `typeof` to determine the actual type and handle both cases correctly.

function myNarrowChecker (value : string | number ){
    if (typeof value == "string"){
        let responce = value.length
        console.log("the type is string, length:",responce)
    }else{
        let responce = value * 2
        console.log("the type is number, doubled:",responce)
    }
}

myNarrowChecker("Hello")
myNarrowChecker(10)
// ## Level 3 — Interfaces and Type Aliases

// ### Q16. Interface: Object Shape
// Create an interface named `Student` with `id`, `name`, `email`, and `cgpa`. Create two student objects that follow this interface.

interface Student {
    id : number ,
    name : string ,
    email : string ,
    cgpa : number 
}
let student1 : Student = {
    id: 1,
    name : "Talha",
    email: "abc@gmail.com",
    cgpa : 3.3
}
let student2 :Student = {
    id: 2,
    name : "Ali",
    email: "xyz@gmail.com",         
    cgpa : 3.5
}
console.log("Student 1 object ", student1)
console.log("student 2 ",student2)
// ### Q17. Optional Interface Properties
// Extend the `Student` interface with an optional `phone` property. Create one student with a phone number and another without one.

interface Optional extends Student {
    phone ? : number 
    address ? : string
}

let student3 : Optional = {
    id: 3,
    name : "Ahmed",
    email: "def@gmail.com",
    cgpa : 3.7,
    phone : 1234567890,
    address : "123 Main St"
}
console.log("Student 3 object with phone and address ", student3)

// ### Q18. Readonly Properties
// Create an interface named `Car` with a `readonly` registration number and a mutable color. Create a car object and try changing both properties.

interface Car {
    readonly regNumber : string , 
    color : string
    company : string 
}

let myCar : Car = {
    regNumber : "ABC123",
    color : "Red",
    company : "Toyota"
}
console.log("Car object before color change ", myCar)
myCar.color = "Blue" 
// myCar.regNumber = "XYZ789"  error 
console.log("Car object after color change ", myCar)
// ### Q19. Interface Extension
// Create an interface `Person` with `name` and `age`. Extend it with a `Teacher` interface that adds `subject` and `salary`. Create a teacher object.
interface Person {
    name : string ,
    age : number 
}
interface Teacher extends Person {
    subject : string ,
    salary : number 
}
let teacher : Teacher = {
    name: "Talha",
    age: 30,
    subject: "Mathematics",
    salary: 50000
}
console.log("Teacher object ", teacher) 

// ### Q20. Interface with Methods
// Create an interface named `Calculator` containing an `add` method and a `subtract` method. Implement an object that satisfies this interface.

interface Calculator {
    add (x:number , y:number ): number ,
    subtract (x:number , y:number ): number
}
let myCalculator : Calculator = {
    add : (x:number , y:number ): number => x + y,
    subtract : (x:number , y:number ): number => x - y
}
console.log("Addition: ", myCalculator.add(10, 5))
console.log("Subtraction: ", myCalculator.subtract(10, 5))
// ### Q21. Type Alias for Object Shape
// Create a type alias named `Product` with `id`, `name`, `price`, and an optional `discount`. Create a product object.

// ### Q22. Interface vs. Type Alias
// Represent the same student object using an interface and a type alias. Write a short comment explaining one difference between them.

// ### Q23. Intersection Types
// Create two type aliases: `Employee` with `employeeId` and `name`, and `Developer` with `programmingLanguage`. Combine them using an intersection type and create an object containing all three properties.

// ### Q24. Interface Declaration Merging
// Declare the same interface twice, adding different properties in each declaration. Create an object that satisfies the merged interface.

// ### Q25. Function Type Alias
// Create a type alias named `Operation` for a function that accepts two numbers and returns a number. Use it to implement addition and multiplication functions.

// ## Level 4 — Classes and Object-Oriented Programming

// ### Q26. Class Definition
// Create a `Student` class with properties for name and age, and a method that displays the student's details. Instantiate two objects.

// ### Q27. Constructors
// Create a `Rectangle` class whose constructor accepts width and height. Add a method that calculates its area.

// ### Q28. Access Modifiers
// Create a `BankAccount` class with a public account holder name, a private balance, and a protected account type. Add methods to deposit money and display the balance safely.

// ### Q29. Readonly Properties
// Create a `University` class with a readonly university ID initialized through the constructor. Allow its name to be changed but not its ID.

// ### Q30. Optional Properties
// Create a `User` class with a required name and an optional nickname. Display the nickname only if it exists.

// ### Q31. Parameter Properties
// Create a `Car` class using constructor parameter properties to define `brand`, `model`, and `year` without declaring the properties separately.

// ### Q32. Getters and Setters
// Create a `Temperature` class with a private Celsius value. Implement a getter for Celsius and a setter for Fahrenheit that converts the value to Celsius.

// ### Q33. Static Members
// Create a `Counter` class with a static property that tracks how many instances have been created. Create three instances and display the count.

// ### Q34. Abstract Classes and Methods
// Create an abstract class `Shape` with an abstract `calculateArea()` method. Implement it in `Circle` and `Rectangle` subclasses.

// ### Q35. Inheritance and Method Overriding
// Create a base class `Animal` with a `makeSound()` method. Extend it with `Dog` and `Cat`, overriding the method in each subclass.

// ### Q36. Implementing Interfaces in Classes
// Create an interface `Payment` with a `pay(amount: number)` method. Implement it in `CreditCardPayment` and `CashPayment` classes.

// ## Level 5 — Generics

// ### Q37. Generic Function
// Create a generic function `identity<T>` that accepts a value of any type and returns that same value without losing its type information.

// ### Q38. Generic Function with Arrays
// Create a generic function that accepts an array and returns its first element. Ensure the returned value has the correct inferred type.

// ### Q39. Generic Constraints
// Create a generic function that accepts a value with a `length` property. Use a constraint so that strings and arrays are accepted, but numbers are rejected.

// ### Q40. Generic Interface
// Create a generic interface `ApiResponse<T>` with `data`, `success`, and `message` properties. Use it for responses containing a user object and an array of products.

// ### Q41. Generic Interface with a Method
// Create a generic interface `Repository<T>` with methods to add an item and retrieve all items. Implement it for a `Student` type.

// ### Q42. Generic Class
// Create a generic class `Box<T>` that stores a value of type `T`. Add methods to set and retrieve the value. Test it with a string and a number.

// ### Q43. Generic Class with Constraints
// Create a generic class `DataStorage<T>` that stores multiple items. Add methods to insert an item, retrieve all items, and remove an item by index.

// ### Q44. Multiple Generic Parameters
// Create a generic function that accepts a key and a value of different types and returns them together as an object.

// ### Q45. Generic Defaults
// Create a generic interface `Container<T = string>` with a `value` property. Use it once with the default type and once with an explicitly supplied number type.

// ## Level 6 — Modules, Import and Export

// ### Q46. Named Exports
// Create a file `math.ts` that exports `add()` and `subtract()` functions. Import and use both functions in `main.ts`.

// ### Q47. Named Imports and Aliases
// Export a `Student` interface from `student.ts`. Import it into `main.ts` under an alias and create a valid student object.

// ### Q48. Default Export
// Create a file `logger.ts` with a default-exported `Logger` class. Import it into `main.ts` and use it to print a message.

// ### Q49. Exporting Types
// Create a file `types.ts` that exports a `Product` type and a `Category` enum. Import both into `main.ts` and create a product.

// ### Q50. Combining Named and Default Exports
// Create a module that default-exports a `User` class and named-exports a helper function. Import both into another file and use them.

// ### Q51. Module Organization
// Create three files: `student.ts`, `course.ts`, and `main.ts`. Export a student class and a course interface, then import both into `main.ts` to create and display a student's course information.

// ## Level 7 — Type Assertions, Casting and Null Safety

// ### Q52. Type Assertion with `as`
// Create a variable of type `unknown` containing a string. Use a type assertion to treat it as a string and access its length. Ensure the value really is a string before asserting.

// ### Q53. Type Assertion with DOM Elements
// Select an HTML input element using `document.querySelector()`. Use a type assertion to access its `value` property safely, accounting for the possibility that the element may not exist.

// ### Q54. Type Casting
// Receive a string containing a numeric value, convert it into a number, and calculate its square. Explain in a comment why conversion is different from a type assertion.

// ### Q55. Non-Null Assertion Operator
// Create a function that receives an optional string and uses the non-null assertion operator (`!`) to access its length. Then explain when this operator could cause a runtime error.

// ### Q56. Optional Chaining
// Create an object representing a user with an optional address and optional city. Use optional chaining to access the city without causing an error when the address is missing.

// ### Q57. Nullish Coalescing
// Create a variable that can contain a number, `null`, or `undefined`. Use `??` to provide a default value only when the variable is nullish.

// ### Q58. Type Guards
// Create a function that accepts `string | number | boolean`. Use type guards to handle each possible type safely.

// ### Q59. Assertion vs. Narrowing
// Create a function that receives an `unknown` value. Solve it once using a type guard and once using a type assertion. Add a comment explaining why type guards are generally safer.

// ## Final Challenge — Combine Your Knowledge

// ### Q60. Student Management System
// Build a small TypeScript student management system that uses:
// - Interfaces and type aliases to define student and course data.
// - Primitive types, arrays, optional properties, and readonly properties.
// - A class with a constructor, private properties, getters, and setters.
// - A static member to count students.
// - A generic interface and generic class for storing records.
// - A generic function to search for a student by ID.
// - Named exports and imports across separate files.
// - Type guards to validate input.
// - Optional chaining and nullish coalescing when displaying optional student details.

// Implement methods to add a student, list all students, search by ID, and display the total student count.