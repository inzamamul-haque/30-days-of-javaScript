// The splice() method is a built-in method for JavaScript Array objects. 
// It lets you change the content of your array by removing or replacing existing elements with new ones.
// This method modifies the original array and returns the removed elements as a new array

// The full syntax of the splice() method is as follows:

// Array.splice(start, removeCount, newItem, newItem, newItem, ...)


var number = [1,2,3,4,5];
let splice = number.splice(0, 1);
console.log(splice);

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 1);
console.log(days);
console.log(months);


let month = ["January", "February", "Monday", "Tuesday"];
let day = month.splice(2, 2, "March", "April");

console.log(day);  // ["Monday", "Tuesday"]
console.log(month); // ["January", "February", "March", "April"]
