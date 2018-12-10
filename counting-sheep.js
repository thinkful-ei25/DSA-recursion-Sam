'use strict';

function countSheep(num){
  if(num===0){
    return;
  }
  console.log(num + ' - Another sheep jump over the fence');
  countSheep(num - 1);
}

//countSheep(3);

function countSheep2(num){
  for(let i=num;i>0;i--){
    console.log(i + ' - Another sheep jump over the fence');
  }
}

countSheep2(3);