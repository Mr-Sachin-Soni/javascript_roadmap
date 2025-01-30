"use strict";

function calcAge(birthYear) {
  const age = 2025 - birthYear;
  // console.log(firstName);

  function getAge() {
    const res = `${firstName}, you are ${age}, born in ${birthYear}`;
    // console.log(res);

    if (age >= 18) {
      let str = `Great! ${firstName}, you are adult now`;
      // console.log(str);
    }
  }
  getAge();
  return age;
}

const firstName = "Sachin";

calcAge(2001);

// TDZ - Temporal Dead Zone
// why TDZ - To avoid and catch the errors

const myName = "Sachin";

if (myName === "Sachin") {
  // console.log(`${myName} is a ${job}`); // TDZ starts throws an error for undefined variable ${job}
  const age = 23;
  const job = "Developer"; // TDZ ends as the declartion found
}

// HOISTING - Using function before actual declaration

// Variables
// console.log(age); // undefined
// console.log(job); // error
// console.log(n); // error

// var age = 23;
// let job = "Dev";
// const n = "Sachin";

// Functions

// console.log(funcDecl(4, 5)); // 9
// console.log(funcExp(4, 5)); // cannot access
// console.log(funcArrow(4, 5)); // cannot access

// function funcDecl(x, y) {
//   return x + y;
// }

// const funcExp = function (x, y) {
//   return x + y;
// };

// const funcArrow = (x, y) => x + y;

// this keyword

// console.log(this);

// function calcAge() {
//   const birthYear = 2001;

//   return 2025 - birthYear;
// }
// calcAge();

// var firstName = "Sad";

// const abc = {
//   firstName: "happy",
//   year: 2001,
//   calcAge: function () {
//     console.log(2024 - this.year);
//   },
//   greet: () => console.log(`Hello ${this.firstName}`),
// };

// abc.greet();
// abc.calcAge();

// Arguments keyword

// const addExp = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// var addExpArrow = (a, b) => a + b;
// console.log(addExp(2, 3));
// console.log(addExpArrow(3, 4));

// Shallow vs Deep copy

// const lili = {
//   firstName: "Lili",
//   lastName: "lele",
//   age: 27,
// };

// const afterMarriage = lili;
// afterMarriage.lastName = "roy";

// console.log(lili);
// console.log(afterMarriage);

const lili2 = {
  firstName: "Lili",
  lastName: "lele",
  age: 27,
  family: ["a", "b"],
};

// shallow copy
// const lili2Copy = { ...lili2 };
// lili2Copy.lastName = "roy";
// lili2Copy.family.push("joy");
// lili2Copy.family.push("smith");

// console.log(lili2);
// console.log(lili2Copy);

// Deep copy

// const lilliClone = structuredClone(lili2);
// lilliClone.family.push("joy");
// lilliClone.family.push("smith");
// console.log(lili2);
// console.log(lilliClone);

// Garbage Collection
