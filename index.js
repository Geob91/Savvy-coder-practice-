function initFizzBuzz(num1, num2) {
  return function fizzBuzz46() {
    for (let i = 0; i <= 100; i += 1) {
      if (i % num1 === 0 && i % num2 === 0) {
        console.log(`${i} - FizzBuzz`);
      } else if (i % num1 === 0) {
        console.log(`${i} - Fizz`);
      } else if (i % num2 === 0) {
        console.log(`${i} - Buzz`);
      } else {
        console.log(i);
      }
    }
    return initFizzBuzz();
  };
}

const fizzBuzz46 = initFizzBuzz(4, 6);

fizzBuzz46();
