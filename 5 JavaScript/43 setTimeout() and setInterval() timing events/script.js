//setTimeout() and setInterval() timing events

//setTimeout()
setTimeout(function (){
    console.log('Hello Suraj');
}, 3000);

console.log('Hello Kiran'); //It will run second but show before setTimeout() function because we delayed that

//Another way to write 

function tp(){
    console.log('Another way to write');
}

setTimeout(tp , 4000); 

//To give arguments
function tps(a){
    console.log('Another way to write', a);
}

setTimeout(tps, 4000, 'setTimeout()');

//clearTimeout

function tpz(a){
    console.log('Another way to write', a);
}

let timer = setTimeout(tpz, 4000, 'setTimeout()');
clearTimeout(timer);

//To stop timer using button click

function tpa(a){
    console.log('Another way to write tpa', a);
}

let time = setTimeout(tpa, 1000, 'setTimeout()');

const clear = () => {
    clearTimeout(time);
    console.log('It stopped by clearTimeout()');
}

const btn = document.getElementById('btn').addEventListener('click',clear);



//setInterval()
//Syntax is same as setTimeout() 

function tps(a){
        console.log('Another way to write', a);
    }
    
let tt= setInterval(tps, 1000, 'setInterval()');

clearInterval(tt);

function tpq(a){
    console.log('Another way to write tpa', a);
}

let timez = setInterval(tpq, 100, 'setTimeout()');

const clears = () => {
    clearInterval(timez);
    console.log('It stopped by clearTimeout()');
}

const btnz = document.getElementById('btn-interval').addEventListener('click',clears);


Tasks

function displayName(firstName) {
    console.log(`My name is ${firstName}`);
}

setTimeout(displayName, 4000, 'Suraj');

function dName(firstName) {
    console.log(`My name is ${firstName}`);
}

setInterval(dName, 2000, 'Suraj');

function timz(start, end){
    let stop =setInterval( () => {
        console.log(start);
        if (start>=end){
            clearInterval(stop);
        } else{
            start++;
        }
    }, 6000 );

}
timz(0 , 10);

