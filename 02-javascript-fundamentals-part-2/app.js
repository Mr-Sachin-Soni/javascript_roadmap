// "use strict";

// let hasLicense = false;
// const passedTest = true;

// if (passedTest) hasLicense = true;
// if (hasLicense) console.log("Has license");

// Functions

// function log() {
//   console.log("Hello");
// }

// log();
// log();
// log(); // print 'Hello' thrice

// function processor(a, b) {
//   let c = a + b;
//   return c;
// }

// console.log(processor(10, "0"));

// Function Declaration

// function calcAge1(birthYear) {
//   return 2025 - birthYear;
// }
// const age1 = calcAge1(2000);

// Function Expressions

// const calcAge2 = function (birthYear) {
//   return 2025 - birthYear;
// };
// const age2 = calcAge2(2001);
// console.log(age1, age2);

// Arrow function
// const calcAge3 = (birthYear) => 2025 - birthYear;
// const age3 = calcAge3(2001);
// console.log(age3);

// function calling other functions

// function slicer(fruits) {
//   return fruits * 4;
// }

// const juiceMaker = function (a, b) {
//   const appleSlices = slicer(a);
//   const orangeSlices = slicer(b);
//   return `Make juice with ${appleSlices} pieces of Apple and ${orangeSlices} pieces of Orange`;
// };

// console.log(juiceMaker(2, 3));

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const teamAvg = (s1, s2, s3) => {
//   return (s1 + s2 + s3) / 3;
// };

// let dolphins = teamAvg(85, 54, 41);
// let koalas = teamAvg(23, 34, 27);

// const checkWinner = function (k, d) {
//   k = koalas;
//   d = dolphins;
//   if (k >= 2 * d) {
//     console.log(`Koalas wins ${k} Vs. ${d}`);
//   } else if (d >= 2 * k) {
//     console.log(`Dolphin wins ${d} Vs. ${k}`);
//   } else {
//     console.log(" No team wins");
//   }
// };
// checkWinner(dolphins, koalas);

// Arrays

// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const years = [1990, 2002, 2001, 1999];

// const ages = calcAge(years[0]);
// console.log("The age is: ", ages);

// const age = [
//   calcAge(years[0]),
//   calcAge(years[2]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(age);

// Array Methods

// const friends = ["amol", "yogesh", "aakash"];

// friends.push("pratham"); //adds new item to the end

// friends.unshift("abc"); // add new item in the start

// friends.shift(); // removes first item

// friends.pop(); // removes last item

// console.log(friends.indexOf("pratham")); // provides index of the item (return -1 when not found)

// console.log(friends.includes("joel")); // returns true/false based on requirements meets or not

// console.log(friends);

// ******************CHALLENGE #2**********************

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// let calcTip = (value) => {
//   const tip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
//   return tip;
// };
// console.log(calcTip(100));

// const billsArray = [125, 555, 44];

// const tipArray = [calcTip(125), calcTip(555), calcTip(44)];
// console.log(tipArray);

// const totalsArray = [
//   tipArray[0] + billsArray[0],
//   tipArray[1] + billsArray[1],
//   tipArray[2] + billsArray[2],
// ];
// console.log(totalsArray);

// Objects *********************

// const data = {
//   name: "abc",
//   job: "dev",
//   age: 24,
//   location: "Mumbai",
//   friends: ["amol", "yogesh", "aakash"],
// };

// const promptInput = prompt(
//   "what data you want to know ? name, job, age or location ?"
// );

// if (data[promptInput]) {
//   console.log(data[promptInput]);
// } else {
//   console.log("Please ask name, job, age or location");
// }

// Challenge
// abc has 3 friends, and his bestfriend is aakash

// const dynamicPhrase = `${data.name} has ${data.friends.length} friends, and his bestfriend is ${data.friends[2]}`;
// console.log(dynamicPhrase);

// const data = {
//   name: "abc",
//   job: "dev",
//   birthYear: 2001,
//   location: "Mumbai",
//   friends: ["amol", "yogesh", "aakash"],
//   license: true,
//   calcAge: function () {
//     return 2025 - this.birthYear;
//   },
// };

// // console.log(data.calcAge());

// // Challenge
// // abc is a 24 years old dev, and he has a/not driving license

// console.log(
//   `${data.name} is a ${data.calcAge()} years old ${data.job}, and he has ${
//     data.license ? "a" : "not"
//   } driving license`
// );

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture

// IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     let bmi = this.mass / (this.height * this.height);
//     return bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     let bmi = this.mass / (this.height * this.height);
//     return bmi;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
//       john.fullName
//     }'s BMI (${john.calcBMI()})!`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
//       mark.fullName
//     }'s BMI (${mark.calcBMI()})!`
//   );
// }

// Loops

// for loop

// c;onst data = ["abc", 24, "Mumbai", ["amol", "yogesh", "aakash"]];

// for (let d = 0; d <= data.length; d++) {
//   console.log(data[d]);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(`-----Chapter ${i}-------`);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`Section ${j}`);
//   }
// }

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// let calcTip = (value) => {
//   const tip = value >= 50 && value <= 300 ? value * 0.15 : value * 0.2;
//   return tip;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   total.push(tips[i] + bills[i]);
// }

// console.log(tips, total, bills);

// To find the largest number among array

// const calMax = function (findLargeNumber) {
//   let max = findLargeNumber[0];

//   for (let i = 0; i < findLargeNumber.length; i++) {
//     if (findLargeNumber[i] > max) max = findLargeNumber[i];
//   }
//   console.log(max);
// };

// calMax([21, 43, 57, 23]);

// How to reverse an array

// const array = [5, 3, 10, 0, 29];

// let reversedArray = [];

// for (let n = array.length - 1; n >= 0; n--) {
//   reversedArray.push(array[n]);
// }

// console.log(reversedArray);

// console.log(array.reverse());

// How to reverse a string

// const fName = "sachin";

// let reversedStr = "";

// for (let i = fName.length - 1; i >= 0; i--) {
//   reversedStr += fName[i];
// }
// console.log(reversedStr);
// console.log(fName.split("")).reverse().join("");

// const measurement = function () {
//   const measure = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Enter the temperature :")),
//   };

//   console.log(measure);

//   const data = measure.value + 120;
//   return data;
// };

// console.log(measurement());

// Merging 2 arrays

// const arr1 = [1, 4, 32, 67, 33, 0];
// const arr2 = [0, 24, 76, 88, 12];

// const mergedArr = [...arr1, ...arr2];

// console.log("mergedArr", mergedArr);
// console.log("Concat", arr1.concat(arr2));
