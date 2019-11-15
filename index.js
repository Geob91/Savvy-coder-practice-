// Recursion

function writePsychoBook(num){
  let str = "";

  for (let i = 0; i <= num; i+= 1) {
    str += "All work and no play makes Jack a dull boy!";
  }

  return str;

}

console.log(writePsychoBook(99));