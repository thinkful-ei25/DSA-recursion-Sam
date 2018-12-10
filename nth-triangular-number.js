'use strict';
function tri(n){
  if(n<=1){
    return n;
  }
  return n+tri(n-1);
}

const answer = tri(2);

//console.log(answer);

function tri2(n){
  let answer=0;
  for(let i=0;i<=n;i++){
    answer += i;
  }
  return answer;
}

console.log(tri2(4));