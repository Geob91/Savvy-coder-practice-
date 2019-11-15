// pass by reference and pass by value

let x = 3;

//Y references it's own copy of the number 3
let y = x;

function add1(n){
  return n + 1;
}

//Primitives cannot be mutated
//primitives are passed by value

x = add1 (x);
console.log("x after add1 is", x);
console.log(y);