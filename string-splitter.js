'use strict';

function stringSplitter(str,sep){
  
 
  for(let i=0; i<str.length; i++){
    if(str[i]===sep){
      return [str.slice(i), ... stringSplitter(str.substr(i),sep)];
    } 
  }

}

const answer = stringSplitter('string', 'r');
console.log(answer);


