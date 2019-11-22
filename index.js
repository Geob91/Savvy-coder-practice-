function Striker(first, last, age, internationalCaps, club) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.internationalCaps = internationalCaps;
  this.club = club;
}

Striker.prototype.fname = function() {
  return `My name is ${this.first} it is your pleasure to meet me`;
};

Striker.prototype.lname = function() {
  return `if you have ever met ${this.first} ${this.last} your welcome.`;
};

Striker.prototype.career = function() {
  return `I am ${this.age} and have ${this.internationalCaps} for Sweden and currently play for ${this.club}`;
};

const theManTheMythTheLegend = new Striker(
  "Zlatan",
  "Ibrahimovic",
  38,
  116,
  "LA Galaxy"
);

console.log(theManTheMythTheLegend);
console.log(theManTheMythTheLegend.fname());
console.log(theManTheMythTheLegend.lname());
console.log(theManTheMythTheLegend.career());
