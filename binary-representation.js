'use strict';

/*

input 25

25/2 = 12       25%2=1
12/2 = 6        12%2 = 0
6/2 = 3         6%2  = 0
3/2 = 1         3%2  = 1
1/2 = 0         1%2 = 1

*/

function binary(num){
  if(num===0){
    return '';
  }
  return binary(Math.floor(num/2))+num%2;
}

const answer = binary(25);
console.log(answer);