function initFizzBuzz(num1, num2) {
  for (let i = 0; i < 99; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log("FizzBuzz");
    } else if (i % num1 === 0) {
      console.log("Fizz");
    } else if (i % num2 === 0) {
      console.log("Buzz");
    } else {
      console.log("Value of i is " + i);
    }
  }
}

const fizzBuzz46 = initFizzBuzz(4, 6);
