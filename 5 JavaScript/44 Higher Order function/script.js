//Higher Order Function


//examples of higher order functions
const double = n => n*2;

let arr = [1,2,34,56,7];

let result = arr.map(double); //map() takes another function as a argument so it became higher order function
console.log(result);

//Event listener as a higher order function

const pTag = document.getElementById('p');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    pTag.innerText= 'Hello world'
})