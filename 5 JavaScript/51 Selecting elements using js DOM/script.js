//Selecting elements using DOM

//Four ways to select an element

//Selecting elements using get elements by id
//you can givr any name to a variable 

const heading1 = document.getElementById('heading');
console.log(heading1);


//Selecting element using tag name 

/*This is very powerful only used when we want to choose all the same elements
eg. If we choose h2 then all the h2 tag those are present in a web page 
are going get affected
*/

const h2 = document.getElementsByTagName('h2');
console.log(h2);


//Selecting element by class name

const cName = document.getElementsByClassName('cName');
console.log(cName);


//Selecting element by query selector

/* This is also a powerful selector you can say
this can be used to select one element and also more than one element*/

//using class name we gonna select everyone one but what we wanted only one 
//perticular element even class name is same for other elements too

const queryS = document.querySelectorAll('h4.clName');
console.log(queryS);

//to select only 1 elemet
const querySe = document.querySelector('h5');
console.log(querySe);  //There are two h5 presenet in the webpage but still it is gonna select only one h5

//to select class name using query Selector

const querySel = document.querySelector('.clNames');
console.log(querySel);

//using id by query selector 

const querySelector = document.querySelector('#iName');
console.log(querySelector);
