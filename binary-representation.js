'use strict';

/*

input 25 output 11001

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

//const answer = binary(25);
//console.log(answer);

// function binary2(num){
//   let answer = '';
//   let powerOfTwo = 0;
//   let sum = 0;
//   while (sum< num){
//     let takeAway = Math.pow(2, powerOfTwo);
//     num -= takeAway;

//   }
// }

function binary2(num){
  let str = '';
  let answer = '';
  while (num>0){
    str +=(num%2);
    num = Math.floor(num/2);
  }
  for(let i=str.length;i>0;i--){
    answer += str[i-1];
  }
  return answer;
}

console.log(binary2(25));