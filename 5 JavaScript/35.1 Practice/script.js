//practice

// comments

//single line comment
/* double line
comment*/
/**
 * good
 * comment
 */

//Types of output method
console.log("hey there!");
console.warn("It's warning");
console.error("it's an error");
console.clear();

//How to add css to javascript
console.log("%c adding css", "color: red; font-size: 20px;");

//Types of alert boxes
alert("hie");  //it has only ok button
prompt("r u there?", "yes or no");  // we can ask to type
confirm("r u there"); // it has ok and cancel button

//types of variables
let type1; //undefined
let type2 = 'hello world'; //defined

var type0 = 'Old type to declare a varible';
const type3 = 'This is constant keyword that is not gonna change';

//Data types
//There are two types of DT - primitive and non-primitive
//--Primitive--
let a = 7; //number
let b = 0.8; //number
let c = 'string';
let d = "string";
console.log(1<100); // Boolean true of false
let e = 9999999999999999999n; //BigInt
let f; //undefined
//NUll

//--Non-primitives--
let arra = ['Suraj','Bhagwan','Ambekar']; //array

function func(){
    console.log("it's a function");
}
func();

let obje = {   //It's an object
    name: 'suraj',
    year: 2000,
    age: 22,
}

//Operators

//Arithmetic Operators
console.log(5+2); //addition
console.log(5-2); //subtraction
console.log(5/2); //division
console.log(5*2); //Multiplication
console.log(5%2); //modulus
console.log(5**2); //exponentiation
let incr = 1;
incr++; //increment
console.log(incr);
let decr = 2;
decr--; //decrement
console.log(decr);

//Assignment Operators
let h = '= to assigne value';
let i = 5;
i += 1; //instead of writing this i= i+1 we can use this +=
console.log(i);
i -= 1; // same as above but it decreas value by 1
console.log(i);
i *= 2; // same as about it multiplies by 2
console.log(i);
i /= 2; // same as about it divide by 2
console.log(i);
i %= 2; // same as about it modulus by 2
console.log(i);

//Numbers
let j = 1e6; // 1and 6 zeros 1000000
console.log(j);
j= 1e-6; // 0.000001
console.log(j);

j = new Number(180); // We can create it as a number method

//Number methods
j = 83.980493803;
j = j.toFixed(3);  //How many decimal number we want after a '.'
console.log(j);

j = 83.980493803;
j = j.toPrecision(3);
console.log(j);  //it gives you number from starting regardless of point .

j = 83.980493803;
j = j.toExponential();
console.log(j);  //It gives you scientif exponential number

//String
//different type to assign string to variable
let k = "Suraj";
console.log(k);
k = 'Bhagwan';
console.log(k);
k = `Ambekar`;
console.log(k);

// k = "suraj"sura""; this will show an error
// but to write like about use following
k = "suraj \"suraj\""; //same follows for other
console.log(k); 

// k = 'suraj \'; this will show an error
// but to write this
k = 'suraj \\'; //it will give you only one slash
console.log(k);

//different types of using String concatination
let l = 'hii';
console.log(k+l);
console.log(k+'hey '+l);
console.log(k.concat(l));
console.log(k.concat('hii'));

//Template literals (updated in ES6)
//it is new way of string a string
k = `suraj`;
console.log(k);
//another use of this is we can do following
console.log(`hey ${k}`); //only available in this ``
console.log(`hey
${k}
, how are you?`); //we can you like this write in different line

//String methods
k = 'JavaScript is cool';
console.log(k.length); //to find length of the string
console.log(k.trim()); //it will trim befor and after spaces if present to check add spaces to string
console.log(k.toLocaleLowerCase(),k.toUpperCase()); //To make in upper and lower case
console.log(k.indexOf('a')); //it gives starting index of 'a' letter
console.log(k.lastIndexOf('a')); //it gives last index of 'a' letter
console.log(k.slice(0,10)); //to take out what we wanted
console.log(k.replace('cool','the coolest'));
console.log(k.charAt('5')); //it gives what is present at 5th index

//Date object
//To use this we have to create date object
let date = new Date(); //created date object
console.log(date); //current date
date = new Date(111111); //in milliseconds starts from 1 jan 1970
console.log(date);
date = new Date('Aug 29 2022 08:22:00');
console.log(date); //date string
date = new Date(1999,11,25,14,00,0,0);
console.log(date); //component date

//Date method
//get method to get date
date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay());
console.log(date.getDate());

//Set method to set date and it has same get method only different is use set instead of get
date.setFullYear(2000);
console.log(date);
//same for all the methods

//If you want a universal time 
console.log(date.getUTCDate()); //it is universal


//Math object
let max = Math.max(2,35,64,46);
console.log(max);

let min = Math.min(2,343,234,3,1);
console.log(min);
console.log(Math.pow(5,2)); // 5 raise to 2
console.log(Math.random().toFixed(1)*10);
console.log(Math.floor(5.9));
console.log(Math.round(5.5));

//Operators
//Comparison operator
//Thres types of comparison operator
//relational

let num1 = 9;
let num2 = 10;
let num3 = '9';
console.log(num1<num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(num1>=num2);

//Abstract or loose 
console.log(num1==num2); //false
console.log(num1==num3); //true Why? because == operator does'nt check type that's why
console.log(num1!=num2);

//strict 
console.log(num1===num3); //strict check is it same and is it type same?
console.log(num1!==num2);

//Logical operators divided in 4 parts
let nul;
let logical = 9;

console.log(typeof logical);
logical = !logical; //NOT
console.log(typeof logical);

//OR (one of the condition should be true)
logical || alert("hello"); //now logical is false that's why alert generated but if you comment !logical then logical will become true then alert will not pop up

//AND  (both should be true)
logical && prompt('Hey','hii');

//NULLISH
console.log(nul ?? logical); // it will give false so to get expected op just comment above !logical line


//Control Flow
//Is is divided into two parts 
//Condional statement (it is divided into three parts)
//IF (divided into 3 parts)
let m = 8;
let n = 9;

//if
if (m < n){
    console.log("m is less than n");
}

//if else
if (m > n){
    console.log("m is greater");
} else{
    console.log('n is greater');
}

//else... if 
if (m == n){
    console.log('m and n are same');
} else if(m > n){
    console.log('m is greater');
} else{
    console.log('n is smaller')
}

//Switch
switch (m){
    case 1:
        console.log('it is 1');
        break;
    case 7: 
        console.log('it is 7');
        break;
    case '8': //this is not gonna be op because it also check type of object
        console.log('it is "8" but false op');
        break;
    case 8: 
        console.log('it is 8 and true');
        break;
    default:
        console.log('nothing matched');
        break;
}

//Ternary
console.log((m>n) ? 'm is greater' : 'n is greater');

//Loops divided into 5 parts
//For 
for (i= 1; i<11; i++){ 
    if( i === 1){
        console.log('***** For loop is start *****')
    }
    console.log(`The number generated by for loop is  ${i}`);
    
}

//For...in
let obj = {
    name: 'Suraj',
    age: 22,
    BYear: 2000,
}

for (let z in obj ){
    if (z === 'name'){
        console.log('***** For in loop is start *****')
    }
    console.log(`${z} is ${obj[z]}`);
}


//For...of 
let arr = [1,2,3,4,5,6,7];
for (z of arr){
    if (z == 1){
        console.log('***** For of loop is start *****');
    }
    console.log(z);
}

//While
// In for loop I have created a variable i so don't worry about why i didn't use let 
i = 1;
while(i <11){
    if (i ===1 ){
        console.log('***** While loop is start *****')
    }
    console.log(`The number generated by while loop is ${i}`);
    i++;
}

//Do While
i = 1;
do{
    if (i== 1){
        console.log('***** Do While loop is start *****');
    }
    console.log(`The number generated by Do While loop is ${i}`);
    i++;
} while (i< 11)


//Arrays

let arrays = [1,'Suraj',true];
console.log(arrays);

//to find value using index
console.log(arrays[2]);

//to add values
arrays[3] = 'hii';
console.log(arrays);

//To delete
delete arrays[3];
console.log(arrays); //When you delete an item from array still it show empty because
//item is deleted but index not so position is empty
//for this we have a array method that will see next

//When you add array inside a array it becomes multidimentinal array
arrays= [1,'Suraj',true, [1,'Suraj',true]];
console.log(arrays);

//To access value from muldimentional array
console.log(arrays[3][1]);

//array properties
console.log('array property');
console.log(`The length of an array is ${arrays.length}`);

//array methods
console.log('array methods');
let arrMethod = ['Suraj',1, 3, 'Ambekar'];
let secArr = ['Kiran',1, 3, 'Ambekar'];
console.log(arrMethod.indexOf('Ambekar')); //indexOf()
console.log(arrMethod.includes(1)); //includes()
console.log(arrMethod.pop()); //pop()
console.log(arrMethod);
console.log(arrMethod.shift()); //shift()
console.log(arrMethod);
console.log(arrMethod.push('Ambekar')); //push()
console.log(arrMethod);
console.log(arrMethod.unshift('Suraj')); //unshift()
console.log(arrMethod);
console.log(arrMethod.concat(secArr)); //concat()
console.log(arrMethod.join('|')); //join()
a = 'suraj, Ambekar';
console.log(a.split(',')); //split()
console.log(arrMethod.slice(1,2)); //slice()
console.log(arrMethod.splice(0,1,'Mangal')); //splice()
console.log(arrMethod);
console.log(arrMethod.reverse()); //reverse()
console.log(arrMethod.sort()); //sort()

//Array iterator methods
//for each
let forArray = ['Suraj',1,35,true];

console.log('forEach()');
forArray.forEach(
    function(value, index, arr){
        console.log(`The index of ${value} is ${index}`);
        // console.log(index);
        // console.log(arr);
    }
);

//map()
console.log('map()');
let mapArr = ['Suraj','Kiran','Bhagwan','Mangal'];

function upperCase(value){
    return value.toUpperCase();
}

let o = mapArr.map(upperCase);
console.log(o);

//filter()
console.log('filter()');
let filterArr = [1, 34,252,524,234,5,2];

let p = filterArr.filter(
    function(value){
        return value %2===0;
    }
);
console.log(p);

//reduce()
console.log('reduce()');
function sumArr(total, value, index, arr){
    return total +value;
}
let q = filterArr.reduce(sumArr);
console.log(q);

//some()
console.log('some()');
let someArr = filterArr.some(
    function(value){
        return value> 10;
    }
);
console.log(someArr);

//every()
console.log('every()');
let everyArr = filterArr.every(
    function(value){
        return value >0;
    }
);
console.log(everyArr);

//find()
console.log('find()');
let findArr = filterArr.find(
    function(value){
        return value === 34;
    }
);
console.log(findArr);

//findIndex()
console.log('findIndex()');
let findIndArr = mapArr.findIndex(
    function(value){
        return value === 'Suraj';
    }
);
console.log(findIndArr);

//Set And Weak set
console.log('Set and Weak Set');
let sets = new Set();

sets.add('Suraj');
console.log(sets);
sets.add('Bhagwan').add('Ambekar').add('jh');
console.log(sets);

//to delete
sets.delete('jh');
console.log(sets);

//to check value is present or not
console.log(sets.has('Suraj'));

//to check the size
console.log(sets.size);

//to clear set entirely
console.log(sets.clear);

//to take array as a set
let setArr = [134,34,22,23,1,1];

sets = new Set(setArr);
console.log(sets);

//Weak Set
let weakSet = new WeakSet();

weakSet.add(setArr);
console.log(weakSet);
//all the methods are same as set method


//Map and Weak maps
console.log('Map and Weak map');

let maps = new Map();

maps.set('Name','Suraj');
maps.set('age',22).set('BY',2000);
console.log(maps);

//to get a value
console.log(maps.get('Name'));

//to check
console.log(maps.has('Name'));

//to delete
console.log(maps.delete('BY'));

//to find a size
console.log(maps.size);

//iterator method of maps
for( let key of maps.keys()){
    console.log(key);
}

for (let value of maps.values()){
    console.log(value);
}

for(let entries of maps.entries()){
    console.log(entries);
}

//Weak map
let weakMap = new WeakMap();
console.log(weakMap);

//Functions
//function declaration
function hello(){
    console.log('hei');
}
hello();

//function expression
let r = function(){
    console.log('function expression');
}
r();

//parameters and arguments
function sum(num1,num2){ //these are parameters
    console.log(num1+num2);
}
sum(1,2); //these are arguments

//return function
function retur(){
    return 'This is return funciton';
}
console.log(retur());












