class Person {
  constructor(fname, lname, age, occupation) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.occupation = occupation;
  }

  get fullName() {
    return `${this.fname} ${this.lname}`;
  }

  set changeName(newLname) {
    if (newLname) {
      this.lname = newLname;
    } else {
      console.error("This is not working.");
    }
  }
}

const human1 = new Person("George", "Blezard", "28", "Student");
human1.changeName = "Ryan";

console.log(human1);

class Employee extends Person {
  constructor(fname, lname, age, occupation, empid) {
    super(fname, lname, age, occupation);
    this.id = empid;
  }

  get bio() {
    return `I am a happy employee ${this.id}`;
  }

  get empid() {
    return `My ID is ${this.id}`;
  }

  set empid(id) {
    this.id;

    empid = id;
  }

  get assignments() {
    let ret = `the current task list follows :`;

    for (let i = 0; i < this.workload.length; i += 1) {
      ret += `${this.workload[i]}`;
    }
    return ret;
  }

  set assignments(assignments) {
    this.workload = assignments;
  }
}

const emp1 = new Employee("George", "Blezard", 28, "Student", 1991);
emp1.assignments = ["Make lesson plan", "Teach lesson", "Grade students"];
console.log(emp1);
