//difference between find and findIndex 
// find method return the actual value where findIndex return index of the value

//find Array Index 
var number = [1,2,3,4,5];

var findIndex = number.findIndex( res => {
   if(res === 4) {
       return res;
   }
});
console.log(findIndex);
