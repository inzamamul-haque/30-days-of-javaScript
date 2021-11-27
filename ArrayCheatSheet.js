var number = [1,2,3,4,5];
var result = [];


//map
//return a new array

result = number.map( ele => {
    return ele;
});

console.log(result);


var age = 5;

//tarnary opeator

var type = (age >= 20) ? 'adult' : (age >= 10) ? 'child' : 'young';

console.log(type);

//find array value

var find = number.find( currentValue => {
    if(currentValue === 4) {
        return currentValue;
    }
 
});

console.log(find);

//find Array Index 


var findIndex = number.findIndex( res => {
    if(res === 4) {
        return res;
    }
});

console.log(findIndex);

//difference between find and findIndex 
// find method return the actual value where findIndex return index of the value



console.log('-----')
//filter the value
let filter = number.filter( (currentValue, index, arr) => {
    if(currentValue <= 3) {
        return currentValue;
    }
    console.log(currentValue);   
});


//slice 

let slice = number.slice(0,3)
console.log(slice);



//delete index

let splice = number.splice(0, 1);
console.log(splice);


//for of, for in

for (element of number) {
    console.log(element);
}

for (element in number) {
    console.log(element);
}


const obj = {
    name: 'rifat',
    age: '25'
};

for (element in obj) {
    console.log(element);
}

let reduce = number.reduce((x,y) => x*y)

console.log(reduce);
