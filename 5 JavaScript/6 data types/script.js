/* 
        PRIMITIVES DATA TYPES
*/
//--------------------------------------------------------------
// number data types
let num = 7;
let newNum = 8.88;

// String data types
let favFood = "Pizza";
let favDrink = "Mango juice";

//Boolean data types
console.log(1> 100);
console.log(1<100);
console.log(favDrink == "Mango");
console.log(favDrink == "Mango juice");

//BigInt data types
let bigNumber = 9007199254740992n;
console.log(typeof bigNumber);  // "type of" used to show the type of the variable

//Undefined data types
let channelName;
console.log(typeof channelName);
//-----------------------------------------------------------------



/* 
        NON-PRIMITIVES DATA TYPES
*/
//-----------------------------------------------------------------
//array data types
let myList = ["suraj", true, "dev Dreamer", 7];
console.log(myList);
console.log(myList[0]); // to access the value from the array
 
//function data types
function hello(){
    console.log("hello");
}

hello();

let hey = function(){
    console.log("this is how we can assign a function to a varible");
}

hey();   // it is going to work as same as hello() function (check the op)

//object data types
let character ={
    name: "suraj",
    age : 22,
    color: "black",
    male: "true",
};  

console.log(character);
console.log(character.name); //to access the value from the object
//-----------------------------------------------------------------

//tasks 

let favDrinkk = "Coca-Cola"; //created string
console.log(favDrinkk);

let favNum = 3; //created num
console.log(favNum);

function myFavs(){ // created a function
    console.log("Goku is my favourite anime character");
}

myFavs();

let person = {
    name : "JOhn",
    age: 30,
};
console.log(person);