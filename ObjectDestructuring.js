//destructuring

const myObj = {
    name: 'rifat',
    age: '25',
    university: {
        name: 'bubt',
        course: {
            name: 'cse-101'
        }
    }
};

const {name: myName} = myObj;
console.log(myName);


const {university: {course : {
    name: courseName
}}} = myObj;

console.log(courseName);
