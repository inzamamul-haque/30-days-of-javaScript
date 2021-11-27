//The arr.filter() method is used to create a new array from a given array consisting of only those elements 
//from the given array which satisfy a condition set by the argument method

// Syntax: 
// array.filter(callback(element, index, arr))

var number = [1,2,3,4,5];

//filter the value
let filter = number.filter( (currentValue, index, arr) => {
   if(currentValue <= 3) {
       return currentValue;
   }
   console.log(currentValue);
});
