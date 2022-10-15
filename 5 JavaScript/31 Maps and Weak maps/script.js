//Maps and Weak maps

let obj = {   //this is the object
    name:'suraj',
    age: 22,
    bornYear: 2000,
} 

let gameMap = new Map(); //We have created a map()
console.log(gameMap);

//To add values
gameMap.set('Name','Suraj');
gameMap.set('age',22).set('bornYear',2000);

console.log(gameMap);

//To get inside values
console.log(gameMap.get('Name'));

//To check value is present or not
console.log(gameMap.has('Name'));

//to delete the value
gameMap.delete('bornYear');
console.log(gameMap);

//To find the size of map
console.log(gameMap.size);

//To iterate all over the map we have three methods
//keys()
for (let key of gameMap.keys()){
    console.log(key);
}

//values()
for (let value of gameMap.values()){
    console.log(value);
}

//enteries()
for (let [k,v] of gameMap.entries()){
    console.log(`${k} has the value of ${v}`);
}

//Weak maps

let weakMap = new WeakMap();

console.log(weakMap);
// weakMap.set('name','suraj');//It is gonna show an error because we have used primitive data type in key
// console.log(weakMap);


//Tasks

let universal = new Map();

universal.set('Ryu','Japan').set('Ken','USA').set('Guile','USA').set('Blanka','Brazil');
console.log(universal);

for (let value of universal.values()){
    console.log(value);
}