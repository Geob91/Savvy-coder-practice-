const strs = [
  "Hello",
  "something",
  3,
  "boolean",
  "Hello",
  "Hello",
  "Hell",
  "world",
  "Hello",
  { me: "name" },
  { me: "name" }
];

// function giveMeAnswer(strings) {
//   return strings.map(strings => {
//     return strings === "Hello";
//   });
// }
// //console.log(giveMeAnswer(strs));

// function hasHello(strings) {
//   return strings
//     .map(string => {
//       return string === "Hello";
//     })
//     .filter(bool => bool).length;
// }

function findValue(someArr, target) {
  return someArr.filter(element => element === target).length;
}

console.log(findValue(strs, { me: "name" }));

// console.log(findValue(strs));
// console.log(hasHello(strs));
// //.Includes does everything above --- don't type out above but that is the function of includes.
// console.log(strs.includes("Hello"));
