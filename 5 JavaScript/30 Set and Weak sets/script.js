//Sets and Weak sets

const fruits = new Set();

fruits.add('apple');
fruits.add('mango').add('banana').add('pineapple');

fruits.add('mango'); //it won't let u add duplicate value
fruits.add('maNgo'); //but if you add value like this it will add this because it is case sensetive
console.log(fruits);

fruits.delete('maNgo');
console.log(fruits);

let check = fruits.has('suraj');
console.log(check);

console.log(fruits.size);

// fruits.clear();
// console.log(fruits);

let arr = ['don','done','dish'];
let arrSet = new Set(arr);
console.log(arrSet);

//Weak Set //it only contains non- primitive values like objects

let wSet = new WeakSet();

// wSet.add(1); //it will throw an error because it is primitive value
// console.log(wSet);

wSet.add(arr);
console.log(wSet); //it will show array becayse array values are primitives

function don(x){
    return x;
}

wSet.add(don);
console.log(wSet);

//Tasks

let taskSet = new Set();

taskSet.add('Scorpion').add('sub-zero').add('Reptile').add('Liu kang');
console.log(taskSet);

// for (let i = 0; i < taskSet.size; i++){
//     console.log(taskSet[i]);
// }

for ( x of taskSet){
    console.log(x);
}