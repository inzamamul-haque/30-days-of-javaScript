// The arr.find() method in Javascript is used to get the value
// It checks all the elements of the array and whichever first element satisfies the condition is going to print.
// This function will not work function having the empty array elements, also does not change the original array

var number = [1,2,,4,5];
var find = number.find( (currentValue, index, array) => {
   if(currentValue === 4) {
       return currentValue;
   }
});
console.log(find);
