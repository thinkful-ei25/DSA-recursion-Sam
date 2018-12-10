'use strict';
function arrayDouble(arr){
  if(arr.length ===0){
    return [];
  }
  
  return [arr[0]*2, ...arrayDouble(arr.slice(1))];

}

const answer = arrayDouble([1,2,3]);
console.log(answer);