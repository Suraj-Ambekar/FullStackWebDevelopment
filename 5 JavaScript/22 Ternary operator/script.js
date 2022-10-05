// Ternary Operator

let a = 18;

if (a >= 18){
    console.log("you are eligible");
}else{
    console.log("You are not eligible");
}

// ternary is same as if else statement now let's see

let message = a>= 18 ? 'you are eligible' : 'you are not eligible';

console.log(message);

let body = document.querySelector('body');
let choice = 'white';

// choice === 'white' ? body.classList.add('whites') : null; //not working