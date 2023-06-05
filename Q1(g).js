function  duplicates(array){
    let dup = [...new Set(array)];
    console.log(dup);
 }
 duplicates();

 (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])
   