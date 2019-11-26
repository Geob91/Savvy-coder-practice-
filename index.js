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

Striker.prototype.setOldClubs = function(beenThere) {
  this.oldClubs = beenThere;
};

Striker.prototype.getOldClubs = function() {
  let clubList = `This player played for these clubs`;

  for (let i = 0; i < this.oldClubs.length; i += 1) {
    clubList += `${i + 1} - ${this.oldClubs[i]}`;
  }
  return clubList;
};

const theManTheMythTheLegend = new Striker(
  "Zlatan",
  "Ibrahimovic",
  38,
  116,
  "LA Galaxy"
);

theManTheMythTheLegend.setOldClubs([
  "Malmo",
  "Ajax",
  "Juventus",
  "Inter Milan",
  "Barcelona",
  "PSG",
  "Manchester United"
]);

console.log(theManTheMythTheLegend);
console.log(theManTheMythTheLegend.getOldClubs());

/* console.log(theManTheMythTheLegend);
console.log(theManTheMythTheLegend.fname());
console.log(theManTheMythTheLegend.lname());
console.log(theManTheMythTheLegend.career());
*/
