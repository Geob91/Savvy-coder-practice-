function doMath(x, y, operation) {
  console.trace();
  return operation(x, y);
}
function subtract(x, y) {
  console.trace();
  return x - y;
}

function add(x, y) {
  console.trace;
  return x + y;
}

console.log(doMath(10, 5, subtract));
console.log(doMath(10, 5, add));

// function factory below

function initSportScorer(pts) {
  return function(score) {
    return score + pts;
  };
}
const threePointer = initSportScorer(3);
console.log(threePointer(99));

// Making my own function

function rugbyScore(pts) {
  return function(score) {
    return score + pts;
  };
}
const fivePoints = rugbyScore(5);
console.log(fivePoints(25));

// Call stack

function foo() {
  console.trace();
  bar();
  console.trace();

  return "foo";
}

function bar() {
  console.trace();
  baz();
  console.trace();

  return "bar";
}

function baz() {
  console.trace();

  return "baz";
}

console.log(foo());
