function Winger(first, last, age, internationalCaps, club) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.internationalCaps = internationalCaps;
  this.club = club;
}

Winger.prototype.wholeName = function() {
  return `My name is ${this.getFullName()} I am the best player in the world.`;
};

Winger.prototype.getFullName = function() {
  return `${this.first} ${this.last}`;
};

Winger.prototype.getCareer = function() {
  return ` I play for ${this.club} and I am ${this.age} with ${this.internationalCaps} caps for Portugal`;
};

Winger.prototype.setNewClub = function(moveClub) {
  this.club = moveClub;
};

const bestInTheWorld = new Winger(
  "Cristiano",
  "Ronaldo",
  34,
  164,
  "Real Madrid"
);

bestInTheWorld.setNewClub("Juventus");

console.log(bestInTheWorld);

console.log(bestInTheWorld.getFullName());
console.log(bestInTheWorld.getCareer());
