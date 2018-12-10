'use strict';

function countSheep(num){
  if(num===0){
    return;
  }
  console.log(num + ' - Another sheep jump over the fence');
  countSheep(num - 1);
}

countSheep(3);