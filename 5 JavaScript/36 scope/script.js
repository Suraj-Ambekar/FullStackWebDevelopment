//scope variable

let a = 'game'; //global variable

function hello(){
    let a = 'game'; //local varibale
}

//Tasks

let firstName = 'Kiran';
let lastName = 'Ambekar';
let age = 20;
function info(){
    let country = 'India';
    console.log(`${firstName}  ${lastName} is ${age} years old and lives in ${country}.`);
}
info();

let game = 'Sonic';
if(true){
    let game = 'Mario';
    console.log(game);
}
console.log(game);