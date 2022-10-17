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
// console.log("hey there!");
// console.warn("It's warning");
// console.error("it's an error");
// console.clear();

//How to add css to javascript
// console.log("%c adding css", "color: red; font-size: 20px;");

//Types of alert boxes
// alert("hie");  //it has only ok button
// prompt("r u there?", "yes or no");  // we can ask to type
// confirm("r u there"); // it has ok and cancel button

//types of variables
// let type1; //undefined
// let type2 = 'hello world'; //defined

// var type0 = 'Old type to declare a varible';
// const type3 = 'This is constant keyword that is not gonna change';

//Data types
//There are two types of DT - primitive and non-primitive
//--Primitive--
// let a = 7; //number
// let b = 0.8; //number
// let c = 'string';
// let d = "string";
// console.log(1<100); // Boolean true of false
// let e = 9999999999999999999n; //BigInt
// let f; //undefined
//NUll

//--Non-primitives--
// let arr = ['Suraj','Bhagwan','Ambekar']; //array

// function func(){
//     console.log("it's a function");
// }
// func();

// let obj = {   //It's an object
//     name: 'suraj',
//     year: 2000,
//     age: 22,
// }

//Operators

//Arithmetic Operators
// console.log(5+2); //addition
// console.log(5-2); //subtraction
// console.log(5/2); //division
// console.log(5*2); //Multiplication
// console.log(5%2); //modulus
// console.log(5**2); //exponentiation
// let incr = 1;
// incr++; //increment
// console.log(incr);
// let decr = 2;
// decr--; //decrement
// console.log(decr);

//Assignment Operators
// let h = '= to assigne value';
// let i = 5;
// i += 1; //instead of writing this i= i+1 we can use this +=
// console.log(i);
// i -= 1; // same as above but it decreas value by 1
// console.log(i);
// i *= 2; // same as about it multiplies by 2
// console.log(i);
// i /= 2; // same as about it divide by 2
// console.log(i);
// i %= 2; // same as about it modulus by 2
// console.log(i);

//Numbers
// let j = 1e6; // 1and 6 zeros 1000000
// console.log(j);
// j= 1e-6; // 0.000001
// console.log(j);

// j = new Number(180); // We can create it as a number method

//Number methods
// j = 83.980493803;
// j = j.toFixed(3);  //How many decimal number we want after a '.'
// console.log(j);

// j = 83.980493803;
// j = j.toPrecision(3);
// console.log(j);  //it gives you number from starting regardless of point .

// j = 83.980493803;
// j = j.toExponential();
// console.log(j);  //It gives you scientif exponential number

//String
//different type to assign string to variable
let k = "Suraj";
console.log(k);
k = 'Bhagwan';
console.log(k);
k = `Ambekar`;
console.log(k);

// k = "suraj"sura""; this will show an error
//but to write like about use following
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




















