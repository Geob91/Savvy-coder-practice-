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

function initSportScorer(pts) {
  return function(score) {
    return score + pts;
  };
}
