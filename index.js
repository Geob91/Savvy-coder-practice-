class CenterBack {
  constructor(fname, lname, age, height, weight) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  get fullName() {
    return `${this.fname} ${this.lname}`;
  }
  get size() {
    return `${this.height} ${this.weight}`;
  }
}
const human1 = new CenterBack("Harry", "Maguire", 26, 6.4, 220);

console.log(human1);

class BigBack extends CenterBack {
  constructor(fname, lname, age, height, weight, club, nationality) {
    super(fname, lname, age, height, weight);
    this.badge = club;
    this.homeland = nationality;
  }

  get nationality() {
    return `${this.homeland}`;
  }

  set nationality(homeland) {
    this.homeland;

    this.nationality = homeland;
  }

  get club() {
    return `${this.badge}`;
  }
  set club(badge) {
    this.badge;

    this.club = badge;
  }
}

const defender = new CenterBack("Harry", "Maguire", 26, 6.4, 220);
defender.club = "Man United";
defender.homeland = "England";

console.log(defender);
