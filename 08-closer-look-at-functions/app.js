"use strict";

const bookings = [];

const createBooking = (flightNum, numPassengers = 4, price = 999) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
  //   console.log(bookings);
};

createBooking("A313", 6);
createBooking("C313", 2, 1200);
createBooking("A0012", undefined, 1100);

// First class functions and Higher order functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformed = (str, fn) => {
  // console.log(`The original string: ${str}`);
  // console.log(`The transformed string: ${fn(str)}`);
  // console.log(`The transformed by: ${fn.name}`);
};

transformed("welcome to javascript", upperFirstWord);
transformed("welcome to javascript", oneWord);

const multiplyFunc = (num) => {
  return num * num;
};

const AdditionFunc = (n) => {
  return n + n;
};

const commonFunc = (n, fn) => {
  // console.log(`Original number: ${n}`);
  // console.log(`Transformed number: ${fn(n)}`);
  // console.log(`Function Name: ${fn.name}`);
};

commonFunc(5, multiplyFunc);
commonFunc(5, AdditionFunc);

// Function returning function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// const greetHey = greet("Hello");
// greetHey("Sachin");

// greet("Hey")("Sachin");

// Using arrow function

// const greet = (greeting) => {
//   return (name) => {
//     // console.log(`${greeting}, ${name}`);
//   };
// };

// const greetFn = greet("Hello");

// greetFn("Sachin");
// greet("Hey")("Sah");

// Using arrow function (advanced)

// const greet2 = (greetings) => (name) => console.log(`${greetings}, ${name}`);

// greet2("Oye")("Bunty");

// The call and apply methods

const airIndia = {
  airLine: "Air India",
  airCode: "IND",
  bookings: [],
  book(flightNum, name) {
    console
      .log
      // `${name} booked a seat on ${this.airLine} flight ${this.airCode}${flightNum}`
      ();
    this.bookings.push({ flight: `${this.airCode}${flightNum}`, name });
  },
};

const book = airIndia.book;

// airIndia.book(687, "Sachin Soni");
// airIndia.book(607, "Sanket Soni");
// console.log(airIndia.bookings);

const qatarAirways = {
  airLine: "Qatar",
  airCode: "DUB",
  bookings: [],
};

// book.call(qatarAirways, 786, "Mr shetty");
// book.call(qatarAirways, 796, "Mr reddy");
// console.log(qatarAirways);

// Apply Method

const flightData = [980, "Yuvi"];

book.apply(qatarAirways, flightData);
// console.log(qatarAirways);

// The bind method

const bookAirIndia = book.bind(airIndia);
const bookQatarAirway = book.bind(qatarAirways);

bookAirIndia(778, "Rohit Sharma");
bookQatarAirway(18, "Virat Kohli");

// Immediatley invoked function IIFE

const runOnce = function () {
  // console.log("This will never run again!");
};

runOnce();

// IIFE

// (function () {
//   console.log("This will never run again!");
// })();

// (() => console.log("This will ALSO never run again!"))();

{
  const val = 26;
  var value = 75;
}

// console.log(value);
// console.log(val);

// Closures

const booking = function () {
  let num = 0;

  return function () {
    num++;
    console.log(`Number is ${num} `);
  };
};

const callNum = booking();

// callNum();
// callNum();
// callNum();
// callNum();

// Closures

let f;

const g = function () {
  const a = 20;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 2;
  f = function () {
    console.log(b * 5);
  };
};

g();
f();

// Redclaring
h();
f();
