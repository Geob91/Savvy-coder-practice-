function Player(height, weight, speed, aggression) {
  this.height = height;
  this.weight = weight;
  this.speed = speed;
  this.aggression = aggression;
}

Player.prototype.whatPosition = function() {
  if (this.height > 6.2 && this.weight > 260 && aggression === true) {
    return "Your a big mean dude I think you should be a forward";
  }
  return "OK maybe we need to find something else for you.";
};
Player.prototype.newPosition = function() {
  if (this.speed > 20) {
    return "HOLY MOLY your fast your going on the wing my son";
  }
  return "Ok so you aren't quick enough but we will find something";
};

Player.prototype.backPostion = function() {
  if (
    (this.height > 6.0 && this.speed > 12 && this.weight) ||
    this.aggression === true
  ) {
    return "We are going to put you in the backline but come in for a training session to see where we will put you.";
  }
};

Player.prototype.setChangeHeight = function(newHeight) {
  if (newHeight && typeof newHeight === "number") {
    this.height = newHeight;
  } else {
    console.error("Must be a number and cannot be blank");
  }
};

const letsFindYourPosition = new Player(6.3, 261, 23, true);

const amazingPlayer = new Player(6.6, 270, 29, true);

amazingPlayer.whatPosition = function() {
  return `I can play any where I want`;
};

/*
console.log("not sure what i am writing", Player);
console.log(letsFindYourPosition.backPostion);


console.log(letsFindYourPosition);
console.log(letsFindYourPosition.whatPosition());
console.log(letsFindYourPosition.newPosition());
console.log(letsFindYourPosition.backPostion());


letsFindYourPosition.setChangeHeight(6);

console.log(letsFindYourPosition);

letsFindYourPosition.setChangeHeight("six");

console.log(letsFindYourPosition);

*/

console.log(amazingPlayer.whatPosition());
