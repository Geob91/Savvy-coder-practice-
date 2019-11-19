function initPerson(fname, lname, age) {
  return {
    firstName: fname,
    lastName: lname,
    age: 23,
    canDrink: function() {
      return age >= 21;
    }
  };
}

const me = initPerson("George", "Blezard", 28);

console.log(me.canDrink());

function initShop(food, cosmetics, toys) {
  return function(total) {
    return food + cosmetics + toys + total;
  };
}

const shopList = initShop(10, 50, 20);
console.log(shopList(100));

function logNumbers(num) {
  if (num === 0) {
    return 2;
  }

  return num + logNumbers(num - 1);
}

console.log(logNumbers(10));
