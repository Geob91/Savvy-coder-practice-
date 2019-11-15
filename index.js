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