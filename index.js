/*
class Striker {
  constructor(first, last, age, internationalCaps, club) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.internationalCaps = internationalCaps;
    this.club = club;
  }

  get fname() {
    return `My name is ${this.first} it is your pleasure to meet me.`;
  }

  get lname() {
    return `If you have ever met ${this.first} ${this.last} your welcome.`;
  }

  get career() {
    return `I am ${this.age} and have ${this.internationalCaps} caps for Sweden and currently play for ${this.club}.`;
  }

  set oldClubs(beenThere) {
    this.oldClubs = beenThere;
  }
}
class theManTheMythTheLegend extends Striker {
  constructor(first, last, age, internationalCaps, club) {
    super(fname, lname, age, internationalCaps, clubs);
  }
}
class listClubs extends Striker([
  "Malmo",
  "Ajax",
  "Juventus",
  "Inter Milan",
  "Barcelona",
  "PSG",
  "Manchester United"
])

const worldClass = new Striker("Zlatan", "Ibrahimovic", 38, 116, "LA Galaxy");

console.log(theManTheMythTheLegend);
console.log(theManTheMythTheLegend.fname());
console.log(theManTheMythTheLegend.lname());
console.log(theManTheMythTheLegend.career());


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

Striker.prototype.setOldClubs = function(newArray) {
  this.array = newArray;
};

const theManTheMythTheLegend = new Striker(
  "Zlatan",
  "Ibrahimovic",
  38,
  116,
  "LA Galaxy"
);

zlatanArray = [
  "Malmo",
  "Ajax",
  "Juventus",
  "Inter Milan",
  "Barcelona",
  "PSG",
  "Manchester United"
];
theManTheMythTheLegend.setOldClubs(zlatanArray);

Striker.prototype.printNum = function() {
  for (let i = 0; i <= this.array.length; i += 1) {
    console.log(this.array[i]);
  }
};
theManTheMythTheLegend.printNum();

/*
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
console.log(theManTheMythTheLegend.fname());
console.log(theManTheMythTheLegend.lname());
console.log(theManTheMythTheLegend.career());
*/
