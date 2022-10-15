//Function Expressions

let games = function (){
    console.log('mario');
    console.log('cricket');
}
games(); //this is function expression.

//we can give a name to function
let game = function newf(){
    console.log('mario');
    console.log('cricket');
}
game();
// newf(); // it will throw an error because we can only call using var name but 
        // but this can be use while recursion


//tasks

let colors = function(){
    console.log('red');
    console.log('green');
    console.log('blue');
}
colors();

let myColours = colors;

myColours();