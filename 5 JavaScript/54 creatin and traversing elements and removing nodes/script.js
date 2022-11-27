// Creating, traversing html elements and removing nodes.


//creating HTML element using javascript
const heading = document.createElement('h1');
console.log(heading);

const body = document.querySelector('body');
console.log(body);

body.appendChild(heading);

heading.innerText = 'Hello, World!';

//Traversing HTML elements
//you can use this queries inside a console section it will be easy to see 

const sub = document.querySelector('.sub');
console.log(sub);

console.log(sub.firstElementChild);
console.log(sub.lastElementChild);

const favSub = document.querySelector('.favSub');
console.log(favSub);

console.log(favSub.previousElementSibling);
console.log(favSub.nextElementSibling);
console.log(favSub.parentElement);

//Removing nodes
favSub.remove(); 