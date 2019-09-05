// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:
const array1 = [
  { id: 0, email: "mmelloy0@psu.edu", name: "Mitzi", gender: "F"},
  { id: 1, email: "kdiben1@tinypic.com", name: "Kennan", gender: "M"},
  { id: 2, email: "kmummery2@wikimedia.org", name: "Keven", gender: "M"},
  { id: 3, email: "gmartinson3@illinois.edu", name: "Gannie", gender: "M"},
  { id: 4, email: "adaine5@samsung.com", name: "Antonietta", gender: "F"}
];

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:
let mName = array1[0].name;
console.log(mName);
// Mitzi's name


// Kennan's ID
let kID = array1[2].id;
console.log(kID);
// Keven's email
let kEmail = array1[2].email;
console.log(kEmail);
// Gannie's name
let gName = array1[3].name;
console.log(gName);
// Antonietta's Gender
let aGender = array1[4].gender;
console.log(aGender);
// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
function kennan_speak(message) {
  return message;
}
console.log(kennan_speak("Hello, my name is Kennan!"));
// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
function multiplyNums(param1, param2) {
  let result = param1 * param2;
  return result;
}
console.log(multiplyNums(3, 4));
// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {}

// Log the parent object's name

// Log the child's age

// Log the name and age of the grandchild

// Have the parent speak

// Have the child speak

// Have the grandchild speak

