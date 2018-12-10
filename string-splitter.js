'use strict';

function stringSplitter(str,sep){
  if(!str.indexOf(sep)){
    return str;
  }
 
  for(let i=0; i<str.length; i++){
    if(str[i]===sep){
      return [str.slice(0,i), ... stringSplitter(str.substr(i,i.length),sep)];
    } 
  }

}

const answer = stringSplitter('string', 'r');
console.log(answer);


