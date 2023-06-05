//Print odd numbers in an array (anonymous function & IIFE)
  function myEven(array){
    for(var i = 0 ; i< array.length ; i++){
    if(array[i]%2!=0){
        console.log(array[i])
    } 
    }
}
myEven([1,2,5,6,8,9]);

(function(array){
  for(var i = 0 ; i< array.length ; i++){
    if(array[i]%2==0){
   console.log(array[i])
    }  
  }
})([1,2,5,6,8,9])

