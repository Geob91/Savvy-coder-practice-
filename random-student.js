/* Arrays auto-incremented numerical keys collections AKA composite data types
 */

const myArr = [
  "Andrew",
  "Billy",
  "George",
  "Heather",
  "Madison",
  "Marque",
  "Martin",
  "Nikki",
  "Oscar",
  "RhondaLyn",
  "Sidney",
  "Tracie",
  "Wallat"
];

function getMs(arr) {
  const mName = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].startsWith("M")) {
      mName.push(arr[i]);
    }
  }

  return mName;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(myArr[getRandomInt(0, myArr.length - 1)]);

console.log(getMs(myArr));
