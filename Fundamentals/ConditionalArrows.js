console.log("Problem 1: Create a function that checks if a person is over 18")

const isOlderThan18 = (age) => age >= 18 ? "You're good to go" : "Sorry, you must be 18 or older to enter!"; 


console.log(isOlderThan18(12));
console.log(isOlderThan18(18));
console.log(isOlderThan18(22));

// 2.) 
console.log("\nProblem 2: Write an arrow function that checks to see if it is currently raining.")

const whatsTheWeather = (isRaining) => isRaining ? "Grab your rain jacket" : "No rain on todays forecast!";



console.log(whatsTheWeather(true))
console.log(whatsTheWeather(false))

console.log("\nProblem 3: Write an arrow function that checks to see if a number is even.")

const isItEven = (num) => num % 2 === 0 ? "Thats an even number!" : "Thats an odd number";


console.log(isItEven(2))
console.log(isItEven(25))
console.log(isItEven(222))

console.log("\nProblem 4: Write an arrow function that takes in two parameters and checks whether one number is greater than another.")

const whichIsBigger = (a,b) => a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`

console.log(whichIsBigger(1,2))
console.log(whichIsBigger(10,2))
console.log(whichIsBigger(1111,2222))




