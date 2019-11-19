function Player(height, weight, speed, aggression) {
  this.height = height;
  this.weight = weight;
  this.speed = speed;
  this.aggression = aggression;

  this.whatPosition = function() {
    if (this.height > 6.2 && this.weight > 260 && aggression === true) {
      return "Your a big mean dude I think you should be a forward";
    }
    return "OK maybe we need to find something else for you.";
  };

  this.newPosition = function() {
    if (this.speed > 20) {
      return `HOLY MOLY your fast your going on the wing my son if you can run ${this.speed}MPH you should race Usain Bolt`;
    }
    return "Ok so you aren't quick enough but we will find something";
  };

  this.backPostion = function() {
    if (
      (this.height > 6.0 && this.speed > 12 && this.weight) ||
      this.aggression === true
    ) {
      return "We are going to put you in the backline but come in for a training session to see where we will put you.";
    }
  };
}

const letsFindYourPosition = new Player(6.3, 261, 23, true);

console.log(letsFindYourPosition);

console.log(letsFindYourPosition.whatPosition());
console.log(letsFindYourPosition.newPosition());
console.log(letsFindYourPosition.backPostion());
