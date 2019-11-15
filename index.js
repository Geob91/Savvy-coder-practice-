// 2 * 2 * 2

console.log(Math.pow(2, 3));

function myPow(num, exp){
  let ret = num;

  for (let i = 1; i < exp; i += 1){
    ret *= num;
  }

  return ret;
}

console.log(myPow(2, 3));

// exp recursion

function myPow(num, exp){
  if (exp === 0) {
    return 1;
  }

  return (num *= myPow(num, exp - 1));

}

console.log(myPow(2, 3))