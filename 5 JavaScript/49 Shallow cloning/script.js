//Shallow cloning

//cloning arrays

//1. spread operator
const arr = [1,2,3,4];
const newarr = [...arr];

arr[4] = 5;
console.log(arr);
console.log(newarr);


//2. array.slice()

const array = [1,452,21];
const newArray = array.slice();

array[3]= 2;

console.log(array);
console.log(newArray);


//cloning objects

//1. spread operator
const obj = { name: 'Suraj',};
const newObj = {...obj};

obj.name = 'Kiran';
console.log(obj);
console.log(newObj);


//2. Object.assign()

const object = {name:'Suraj'};
let newObject = Object.assign({ }, object );

object.name = 'Kiran';
console.log(object);
console.log(newObject);