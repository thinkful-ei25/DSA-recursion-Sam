'use strict';

function fibonacci(num){
  if(num===0){
    return 0;
  } else if (num===1){
    return 1;
  }
  return fibonacci(num-2) + fibonacci(num-1);
}

const answer = fibonacci(7);
console.log(answer);

function fibonacci2(num){
  let a = 1;
  let b = 0;
  let temp;
  while(num>0){
    temp = a;
    a = a+b;
    b = temp;
    num--;
  }
  return b;
}

console.log(fibonacci2(7));