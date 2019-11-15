function factorial (num) {

  let ret = 1;

  for (let i = num; i >= 1; i -= 1){
    ret *= i;

  }

  return ret;
}

console.log(factorial(4));