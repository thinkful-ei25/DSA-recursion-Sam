'use strict';

function factorial(num){
  if(num===1){
    return num;
  }
  return num*factorial(num-1);
}

const answer = factorial(5);
console.log(answer);

function factorial2(num){
  let product = 1;
  for (let i=1; i<=num; i++){
    product *= i;
  }
  return product;
}

console.log(factorial2(5));