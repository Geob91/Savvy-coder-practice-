const numbers = [1, 2, 3, 4, 5, 6];
const strings = ["hello", "world", "again"];

const numbersAndStrings = numbers.concat(strings);

numbers.forEach(function(number) {
  console.log("Number is", number);
});

strings.forEach(function(string) {
  console.log("String is", string);
});

function updatedNumbersAndStrings(originalArr, stringUpdate, numberUpdate) {
  const updatedNumbersAndStrings = [];

  originalArr.forEach(function(el) {
    console.log("Current Element is", el);

    if (typeof el === "String") {
      updatedNumbersAndStrings.push((el += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((el += numberUpdate));
    }
  });

  for (let i = 0; i < originalArr.length; i += 1) {
    if (typeof originalArr[i] === "string") {
      updatedNumbersAndStrings.push((originalArr[i] += stringUpdate));
    } else {
      updatedNumbersAndStrings.push((originalArr[i] += numberUpdate));
    }
  }
  return updatedNumbersAndStrings;
}

console.log(updatedNumbersAndStrings(numbersAndStrings, "Hello", 236));

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
