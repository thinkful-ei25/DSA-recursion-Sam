'use strict';

function stringSplitter(str,sep){
  
  let pos = str.indexOf(sep);
  if(pos===-1){
    return [str];
  }
  return [str.slice(0,pos), ...stringSplitter(str.slice(pos+1), sep)]; 
}

const answer = stringSplitter('banana', 'n');
console.log(answer);


function stringSplitter2(str,sep){
  let answer = [];
  
}