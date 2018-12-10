'use strict';

function reverseString(str){
  if(str===''){
    return '';
  }
  return reverseString(str.substr(1)) + str[0];
}

//const answer = reverseString('reverse');

//console.log(answer);

function reverseString2(str){
  let answer='';
  for(let i=str.length;i>0;i--){
    answer += str[i-1];
  }
  return answer;
}

console.log(reverseString2('test'));