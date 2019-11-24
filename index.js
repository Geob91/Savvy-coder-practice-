class RugbyPlayer {
  constructor(height, weight, speed, aggression) {
    this.height = height;
    this.weight = weight;
    this.speed = speed;
    this.aggression = aggression;
  }

  get whatPosition() {
    if (this.height > 6.2 && this.weight > 260 && aggression === true) {
      return "Your a big mean dude I think you should be a forward";
    }

    return "Ok maybe we need to find something else for you";
  }

  get speedPosition() {
    if (this.speed > 20) {
      return "Holy moly your fast we are putting you on the wing!";
    }
    return "OK so maybe your not a winger lets carry on";
  }

  get backPosition() {
    if (
      this.height > 6.0 &&
      this.speed > 12 &&
      this.weight > 250 &&
      this.aggression === true
    ) {
      return "I think we need to see you in action, you could be a bulldozer backline or a demon of a lose forward.";
    }
  }

  set newHeight(tallHeight) {
    this.height = tallHeight;
  }

  get amazingPlayer() {
    return "I can play anywhere";
  }
}

const whichPosition = new RugbyPlayer(6.2, 250, 20, true);

const amazingPlayer = new RugbyPlayer(6.5, 260, 20, true);

console.log(amazingPlayer.backPosition);
