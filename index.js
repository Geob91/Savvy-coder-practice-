function initSportsScorer(pts) {
  return function(score) {
    return score + pts;
  };
}

const threePointers = initSportsScorer(3);

const touchdown = initSportsScorer(7);

console.log(threePointers(99));
console.log(touchdown(14));
