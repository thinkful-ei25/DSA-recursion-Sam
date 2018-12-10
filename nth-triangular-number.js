'use strict';
function tri(n){
  if(n<=1){
    return n;
  }
  return n+tri(n-1);
}

const answer = tri(2);

console.log(answer);