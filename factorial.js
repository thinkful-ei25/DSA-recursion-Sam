'use strict';

function factorial(num){
  if(num===1){
    return num;
  }
  return num*factorial(num-1);
}

const answer = factorial(5);
console.log(answer);