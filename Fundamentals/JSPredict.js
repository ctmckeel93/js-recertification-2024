// // Problem 1
// // Why did the code produce that output? If applicable, how would you get the index value that did not output?

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// // 1.) Tesla Mercedes
// // 2.) Tesla Mercedes
// // 3. The way destructuring works is breaking the list up into aliases. We use a comma to skip an entry in the array
// // If I was to get the third value in the list, I would assign a variable const [,,thirdCar] = cars

// // Problem 2
// // Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?

// const employee = {
//     employeeName: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { employeeName, employeeName: otherName } = employee;
// //Predict the output
// console.log(otherName);
// console.log(employeeName);

// // 1.) Elon Reference error to the variable employeeName
// // 2.) Elon Reference error to the variable employeeName
// // 3.) Destructuring objects is done by using the keynames of the K/V Pairs and any alias you create instead. We can solve the reference error by also creating a reference to the key directly while destructuring. 

// // Problem 3
// // Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// // 1.) It will throw a runtime error and never get to the console log
// // 2.) I was wrong -> 12345 undefined
// // 3. The way that objects work a key/value pair can be created by simply referencing it. The value will be undefined however. We could change the code by adding a default to hashedPassword 

// // Problem 4
// // Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// const [,,,,fourth] = numbers;
// //Predict the output
// console.log(first === second); // false
// console.log(first === third); // true

// // 1.) false true
// // 2.) false true
// // 3.) Commas are used to skip values when destructuring. first would be equal to the value at index 1 (2), second would be the value at index 3 (5)
// // and third is equal to the last index (2) the values in the console logs are conditional expressions checking equality of the values. 

// // Problem 5
// // Why did the code produce that output? Console.log the last value in the secondKey property's array.

// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest; // value
// const { secondKey } = lastTest; // [1,5,1,8,3,3]
// const [ ,willThisWork] = secondKey; // No, destructuring starts shallow
// //Predict the output
// console.log(key); // value
// console.log(secondKey); // [1,5,1,8,3,3]
// console.log(secondKey[0]); // 1
// console.log(willThisWork); // reference error
// console.log(secondKey[secondKey.length - 1]);
// // I misinterpreted what would happen because i didnt notice the variable name

// // Problem 6
// // First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (var index = 0; index < names.length; index++) {
//       var name = names[index];
//       console.log(name + ' was found at index ' + index);
//     }
//     console.log('name and index after loop is ' + name + ':' + index);
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

// // I was not sure whether the argument passed into printNames would scope from the inner function, It seems arguments do not need to be passed to inner functions when using the pre es6 syntax of function

// // Problem 7
// // Why did the code produce that output?

//  function actuallyPrintingNames() {
//   for (let index = 0; index < names.length; index++) {
//     let name = names[index];
//     console.log(name + ' was found at index ' + index);
//   }
//   console.log('name and index after loop is ' + name + ':' + index);
// }     

// // Nothing will happen
// // Nothing happened
// // The function was not called

// // Problem 8
// // Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

// This is the same as the problem above but with es6 syntax
//  no errors occur because the scope of the variable is within the loop as it is declared, therefore never redeclared. 

// Problem 9
// Why did the code produce that output? Explain why each console.log looks the way it does.

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) // true
console.log(planet === planetCopy) // false

// The values inside of a list are copied when using the spread operator, but a new place in memory is created for the list container. 

