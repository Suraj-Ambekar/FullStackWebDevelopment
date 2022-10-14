//Array methods

let arr = ['Suraj','Kiran','Mangal','Bhagwan','Ambekar'];

console.log(arr.indexOf('Suraj'));

console.log(arr.includes('Surajj'))

console.log(arr.pop());
console.log(arr.shift());

console.log(arr.push('don'));
console.log(arr);

console.log(arr.unshift('don'));
console.log(arr);

console.log(arr);

let newArr = arr.concat(['worlds','best','family']);
console.log(newArr);

let a = ['Suraj','Kiran','Mangal','Bhagwan','Ambekar'];
let newArray = newArr.concat(a);
console.log(newArray);

console.log(arr.join(', '));
console.log(arr.join('|'));
console.log(arr.join('     '));
console.log(arr.join('whaaaaaaaaaaaaaat?'));
console.log(arr.join(a));

let str = 'Suraj, Kiran, Mangal, Bhagwan, Ambekar';

let strArr = str.split(',');
console.log(strArr);

console.log(arr.splice(0,3));

console.log(arr.splice(4, 1));
console.log(arr);

console.log(arr.reverse());

console.log(arr.sort());

// Tasks

let arrFruits = ['apple','orange','banana'];
console.log(arrFruits);

console.log(arrFruits.unshift('cherry','pineapple'));
console.log(arrFruits);
console.log(arrFruits.push('plum','grapes'));
console.log(arrFruits);

console.log(arrFruits.splice(3,1, 'lemon'));
console.log(arrFruits);

console.log(arrFruits.sort());