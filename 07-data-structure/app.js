const obj = {
  colors: ["red", "green", "yellow"],
  marks: [54, 68, 8, 99],
  subject: ["hindi", "english", "marathi", "maths"],
};

const [a, b, c] = obj.marks;

// console.table(obj);
// console.log(a, b, c);

const nested = [1, 2, 4, [5, 6]];

const [w, , x, [y, z]] = nested;

// console.log(w, x, y, z);

// spread operator [... ]

const str = "happy";
// let letters = [...str, "", "a"];

// console.log(letters);

// SPREAD

const arr = [1, 2, ...[3, 4]];

const [p, q, ...others] = [1, 2, 3, 4, 5, 6];

// console.log(p, q, others);

// Create a function that can take multiple arguments as input

function takeMultiple(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
// console.log(takeMultiple([1, 2, 3, 4, 5, 6]));

// Logical operator - use Any data type, return any data type, short circuiting

// console.log(5 || "Hello");
// console.log("" || "Hello");
// console.log(0 || "Hello");
// console.log(null || "Hello");
// console.log("" || null || "");
// console.log(true || 0);

// nullish

const num = 0;

// console.log(num ?? 0);

// for of loop

const content = ["abc", "def", "ghi", "klm"];

for (let a of content) {
  // console.log(a);
}

for (let a of content.entries()) {
  // console.log(a);
}

// Object.keys() method

// const product = {
//   id: 101,
//   name: "Laptop",
//   price: 50000,
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// for (const [a, b] of Object.entries(product.odds)) console.log(a, ":", b);

// Sets

const orderSet = new Set([
  "pasta",
  "pizza",
  "noodles",
  "coffee",
  "pasta",
  "pasta",
  "noodles",
]);

const orderSet2 = new Set([
  "Frankie",
  "soup",
  "pasta",
  "pizza",
  "noodles",
  "pasta",
  "pasta",
  "noodles",
]);

// console.log(orderSet);

// console.log(new Set("hello"));

const common = orderSet.intersection(orderSet2);
const unique = orderSet.union(orderSet2);

// console.log(common);
// console.log(unique);

// Quick solution  - alternate of reduce
const arrOfNum = [1, 2, 3, 4, 5];

let sumReduce = arrOfNum.reduce((a, b) => a + b);
let sum = 0;
// console.log(sumReduce);

for (let x = 0; x < arrOfNum.length; x++) {
  sum += arrOfNum[x];
}
// console.log(sum)

// User visits

// const visitors = [102, 101, 103, 101, 105, 104];

// const uniqueVisitors = [...new Set([...visitors])];

// console.log(uniqueVisitors);

// Map

// const rest = new Map();

// rest.set("name", "IT Park");
// rest.set("location", "singapore");
// rest.set(true, "We are open");
// rest.set(false, "We are closed");

// console.log(rest.size);
// rest.clear();

// wrong way
// rest.set([1, 2], "Test Data");
// console.log(rest.get([1, 2]));

// Right Way

// const setData = [1, 2];

// rest.set(setData, "Test Data");
// console.log(rest.get(setData));

// console.log(rest);

// Maps Iteration

const question = new Map([
  ["question", "Which is a trending language ?"],
  [1, "Angular"],
  [2, "React"],
  [3, "Vue"],
  ["correct", 2],
  [true, "correct"],
  [false, "Try again!"],
]);

// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
// }

// const input = Number(prompt("Please enter the correct language"));

// if (input == question.has(1)) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(true));
// }

// Using ternary

// input == question.get("correct")
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

// using map rules

// console.log(question.get(question.get("correct") === input));

// console.log(input);

// Challenge

// 1. Create an array 'events' of the different game events that happened (No duplicates)
// 2. After the game has finished, it was found that the yellow card from the minute 65 was unfair , so remove this event from the events log
// 3. Print the following string to the console, "An event happened, on average, every 9 minutes" (Keep in mind that a game has 90 min.)
// 4. Loop over the events and log them to the console, marjing whetheter its in the first half or second half (after 45 min.) of the game, like this [FIRST HALF] 17: GOAL

const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (No duplicates)

const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2. After the game has finished, it was found that the yellow card from the minute 65 was unfair , so remove this event from the events log

// console.log(gameEvents.delete(64));

// 3. Print the following string to the console, "An event happened, on average, every 9 minutes" (Keep in mind that a game has 90 min.)

const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4. Loop over the events and log them to the console, marking whetheter its in the first half or second half (after 45 min.) of the game, like this [FIRST HALF] 17: GOAL

// for (const [min, event] of gameEvents) {
//   let half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min} ${event}`);
// }

// Working with strings

const strings = "hello world!";

// console.log("indexOf:", strings.indexOf("l"));
// console.log("lastIndexOf:", strings.lastIndexOf("l"));
// console.log("indexOf:", strings.indexOf("boy"));
// console.log("length:", strings.length);
// console.log("slice:", strings.slice(0, 5));

const passName = "sAcHIn";
const lowerName = passName.toLowerCase();
const capitalisedName = lowerName[0].toUpperCase() + lowerName.slice(1);
// console.log(capitalisedName);

const savedEmail = "sonisachin316@gmail.com";
const userInputEmail = "   SoNiSacHin316@gmail.com \n   ";

const normalizedEmail = userInputEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// Creating a function that reverse a string

function reverseString(str) {
  let reverseStr = "";
  let toReverseUppercase = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
    toReverseUppercase =
      reverseStr[0].toUpperCase() + reverseStr.slice(1).toLowerCase();
  }
  return toReverseUppercase;
}

// console.log(reverseString("Sachin"));

const s = "Wake up in the morning and in the morning";

// console.log(s.replace(/in the morning/g, "early in the morning"));

// console.log(s.startsWith("Wake"));

// console.log(s.includes("no"));

// Split and Join

// console.log("have+a+good+day".split("+"));
// console.log("Sachin Soni".split());

const [firstName, lastName] = "Sachin Soni".split();
const fullName = ["Mr.", firstName, lastName].join(" ");

// console.log(fullName);

const capitalizName = function (name) {
  const names = name.split(" ");
  const nameArr = [];
  for (const n of names) {
    // nameArr.push(n[0].toUpperCase() + n.slice(1));
    // nameArr.push(n.replace(n[0], n[0].toUpperCase()));
  }
  // console.log(nameArr.join(" "));
};

capitalizName("my name is anthony");

// padding

const card = 12435213432;

const hideCard = function (n) {
  // const convert = n + "";
  const lastDigit = convert.slice(-4);

  return lastDigit.padStart(convert.length, "*");
};

// console.log(hideCard(213452231));
// console.log(hideCard(1440678021292));

const msg = "Please wear helmet while riding... ";

const repeatedMsg = msg.repeat(5);

// console.log(repeatedMsg);

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛬".repeat(n)}`);
};

// planesInLine(5);
// planesInLine(2);
// planesInLine(10);

// Challenge

underscore_case;
first_name;

document.querySelector(".submit").addEventListener("click", () => {
  const txt = document.querySelector(".textarea").value;
  const rows = txt.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("-");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
