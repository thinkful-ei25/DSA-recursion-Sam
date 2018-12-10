'use strict';

function reverseString(str){
  if(str===''){
    return '';
  }
  return reverseString(str.substr(1)) + str[0];
}

const answer = reverseString('reverse');

console.log(answer);