// If else statement 

//Js have different variance of if statement 

//1. if statement

if (true){
    console.log("This is the true statemnet");
}
if (false){
    console.log("This is the false statement");
}
if (1 < 2) {
    console.log("1 is less than 2");
}

//2. If else statement
 
let a = 10;

if (a < 5) {
    console.log("a is less than 5");
} else{
    console.log("a is greate than 5");
}

//3. Else if statement

let b = 10;
if (b === 5){
    console.log("b is 5");
} else if(b === 9){
    console.log("b is  9");
}else{
    console.log("b is greater than 9");
}


//tasks

console.log("Here onwards, output will be of tasks");

let num = 10+2;
if (num > 2 && num <20){
    console.log("true");
}else {
    console.log("false");
}

let user = 'employee';

if (user === 'guest'){
    console.log("Login Denied");
}else if( user === 'employee'){
    console.log("Successfully Logged in");
}else{
    console.log("Please enter anything");
}

let myName = 'suraj';

if (myName.length > 5){
    alert("more than 5");
}else if (myName.length === 5){
    alert("exactly 5 letters");
}else{
    alert("less than 5 letters");
}
