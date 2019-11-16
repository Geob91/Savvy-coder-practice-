function initPerson(fname, lname, age) {
  return {
    fname,
    lname,
    age,
    canDrink: function() {
      return age >= 21;
    }
  };
}

const me = initPerson("George", "Blezard", 19);

console.log(me.canDrink());
