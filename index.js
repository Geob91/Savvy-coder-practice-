const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];

const updatedNumbersAndStrings = [];
const numbersAndStrings = numbers.concat(strings);

for (let i = 0; i < numbersAndStrings.length; i += 1) {
  if (typeof numbersAndStrings[i] === "string") {
    updatedNumbersAndStrings.push(
      (numbersAndStrings[i] += "Hello I am a string")
    );
  } else {
    updatedNumbersAndStrings.push((numbersAndStrings[i] += 236));
  }
}

console.log(updatedNumbersAndStrings);

/* const updatedNumbersAndStrings = [];

while (numbersAndStrings.length > 0) {
  // remove the last element of the array
  const value = numbersAndStrings.pop();
  console.log(`${numbersAndStrings.length}: ${value}`);

  // determine if value is a string or number
  // and put it in its appropriate array
  if (typeof value === "string") {
    strings.push(value);
  }
  if (typeof value === "number") {
    numbers.push(value);
  }
}

console.log("numbers is", numbers);
console.log("strings is", strings);
console.log("numbersAndStrings is", numbersAndStrings);

*/
