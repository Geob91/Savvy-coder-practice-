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

  //set oldClubs(newArray) {
  //   this.array = newArray;
  // }
}
const zlatan = new Striker("Zlatan", "Ibrahimovic", 38, 116, "LA Galaxy");

zlatanArray = [
  "Malmo",
  "Ajax",
  "Juventus",
  "Inter Milan",
  "Barcelona",
  "PSG",
  "Manchester United"
];
console.log(zlatanArray.pop());

//console.log(theManTheMythTheLegend);
//console.log(theManTheMythTheLegend.fname());
//console.log(theManTheMythTheLegend.lname());
//console.log(theManTheMythTheLegend.career());
