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
// let k = "Suraj";
// console.log(k);
// k = 'Bhagwan';
// console.log(k);
// k = `Ambekar`;
// console.log(k);

// k = "suraj"sura""; this will show an error
//but to write like about use following
// k = "suraj \"suraj\""; //same follows for other
// console.log(k); 

// k = 'suraj \'; this will show an error
// but to write this
// k = 'suraj \\'; //it will give you only one slash
// console.log(k);

//different types of using String concatination
// let l = 'hii';
// console.log(k+l);
// console.log(k+'hey '+l);
// console.log(k.concat(l));
// console.log(k.concat('hii'));

//Template literals (updated in ES6)
//it is new way of string a string
// k = `suraj`;
// console.log(k);
// //another use of this is we can do following
// console.log(`hey ${k}`); //only available in this ``
// console.log(`hey
// ${k}
// , how are you?`); //we can you like this write in different line

//String methods
// k = 'JavaScript is cool';
// console.log(k.length); //to find length of the string
// console.log(k.trim()); //it will trim befor and after spaces if present to check add spaces to string
// console.log(k.toLocaleLowerCase(),k.toUpperCase()); //To make in upper and lower case
// console.log(k.indexOf('a')); //it gives starting index of 'a' letter
// console.log(k.lastIndexOf('a')); //it gives last index of 'a' letter
// console.log(k.slice(0,10)); //to take out what we wanted
// console.log(k.replace('cool','the coolest'));
// console.log(k.charAt('5')); //it gives what is present at 5th index

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
console.log(Math.floor(5.1));
console.log(Math.round(5.8));




















