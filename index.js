// Multiple functions - function factory

function initSportsScorer(pts) {
  return function(score) {
    return score + pts;
  };
}

const threePointer = initSportsScorer(3);
console.log(threePointer(99));

//Word Function

function wordMessage(greeting, name) {
  return function(niceMessage) {
    return greeting + name + niceMessage;
  };
}

const morningMessage = wordMessage("Good Morning ", "Steve ");
console.log(morningMessage("How are you this fine day?"));

// harder function

function rugbyPoints(pts) {
  return function(finalScore) {
    return pts + finalScore;
  };
}

const winningGame = rugbyPoints(5);
console.log(winningGame(112));

const xtraPt = rugbyPoints(2);
console.log(xtraPt(114));
