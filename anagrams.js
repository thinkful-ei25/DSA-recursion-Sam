'use strict';
function anagrams(str){
  if(str.length<2){
    return str;
  }
  var permutations = [];

  for(var i=0; i<str.length;i++){
    var char = str[i];
    if(str.indexOf(char)!==i)
      continue;
    
    var remainingString = str.slice(0,i) + str.slice(i+1,str.length);
    for (var subPerm of anagrams(remainingString))
      permutations.push(char+subPerm);
  }
  return permutations;
}

const answer = anagrams('east');
console.log(answer);