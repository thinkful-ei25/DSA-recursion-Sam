'use strict';
function arrayDouble(arr){
  if(arr.length ===0){
    return [];
  }
  
  return [arr[0]*2, ...arrayDouble(arr.slice(1))];

}

//const answer = arrayDouble([1,2,3]);
//console.log(answer);

function arrayDouble2(arr){
  let answer = [];
  for(let i=0; i<arr.length;i++){
    answer.push(arr[i]*2);
  }
  return answer;
}

console.log(arrayDouble2([1,2,3]));