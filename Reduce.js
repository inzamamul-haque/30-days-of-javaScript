// Reduce accepts two parameters, the total and the current amount.
// The arr.reduce() method in JavaScript is used to reduce the array to a single value 
// and executes a provided function for each value of the array (from left-to-right) 
// and the return value of the function is stored in an accumulator.

//Syntax:
//array.reduce( function(total, currentValue, currentIndex, arr), initialValue)


let array = [1,1,2,3,4,5,1];
let sum = array.reduce((total, amount) => {
   return total + amount;
});
console.log(sum);


const euros = [29.76, 41.85, 46.5];
const total = euros.reduce((total, amount) => total + amount); 
console.log(total);

// Finding an Average with the Reduce Method In JavaScript​

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if(index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(average);
