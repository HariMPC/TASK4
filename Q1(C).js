function adding(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
  console.log(adding([1,2,3,4]));


(function(array){
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
})([1,2,3,4]);