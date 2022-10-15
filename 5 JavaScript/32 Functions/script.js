// Functions

function game(){
    console.log('sone');
}
game();
game();


let greeting = 'Hey there!'; //global variable

function titles(){
    let title = 'suraj'; //local variable
    console.log(title);
}

titles();

//we can use globale variable inside a function
function titled(){
    let title = 'suraj'; //local variable
    console.log(title, greeting);
}

titled();

//To use anonymous function
let btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
	console.log("sonic");
}); // we you click the button that is present on the screen it will show sonic in console.

//Tasks

function myName(){
    console.log('Suraj');
}
myName();
myName();
myName();
myName();
myName();