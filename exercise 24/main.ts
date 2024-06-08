// Define variables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// Test for equility and unequility with strings
console.log("Is apple is equal to apple?");
console.log(apple== "apple");

console.log("\n Is apple is not equal to apple?");
console.log(apple != "apple");

// Test Using Lowercase function
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLowerCase() != "apple");

// Numerical Tests
//Equals to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

//Not eual to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);

// tests using "and" & "or" operators

// using && (and)
console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// using || (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an item is include in array
console.log("\n Is orange include in my fruits array");
console.log(fruits.includes("orange"));

//not include
console.log("\n Is orange not include in my fruits array");
console.log(!fruits.includes("orange"));













