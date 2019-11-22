/*
function Winger(first, last, age, internationalCaps, club) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.internationalCaps = internationalCaps;
  this.club = club;
}

get wholeName() {
  return `My name is ${this.getFullName()} I am the best player in the world.`;
};

Winger.prototype.getFullName = function() {
  return `${this.first} ${this.last}`;
};

Winger.prototype.getCareer = function() {
  return ` I play for ${this.club} and I am ${this.age} with ${this.internationalCaps}`;
};

Winger.prototype.setNewClub = function(moveClub) {
  return;
  this.club = moveClub;
};

set inTheNet(goals){
  this.goals = goals
}

*/

function Striker(first, last, age, internationalCaps, club) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.internationalCaps = internationalCaps;
  this.club = club;
}

Striker.prototype.fname = function() {
  return `My name is ${this.first} it is your pleasure to meet me.`;
};

Striker.prototype.lname = function() {
  return `If you have ever met ${this.first} ${this.last} your welcome.`;
};

Striker.prototype.career = function() {
  return `I am ${this.age} and have ${this.internationalCaps} caps for Sweden and currently play for ${this.club}.`;
};

Striker.prototype.getOldClubs = function() {
  return this.getOldClubs;
};

const theManTheMythTheLegend = new Striker(
  "Zlatan",
  "Ibrahimovic",
  38,
  116,
  "LA Galaxy"
);

theManTheMythTheLegend.getOldClubs([
  "Malmo",
  "Ajax",
  "Juventus",
  "Inter Milan",
  "Barcelona",
  "PSG",
  "Manchester United"
]);

console.log(theManTheMythTheLegend.getOldClubs());

/*
console.log(theManTheMythTheLegend.fname());
console.log(theManTheMythTheLegend.lname());
console.log(theManTheMythTheLegend.career());
*/
