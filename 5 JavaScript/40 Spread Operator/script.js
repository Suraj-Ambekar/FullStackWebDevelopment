//Spread Operator

//There are three different ways to use spread operator

//Array
console.log('arrays')
let arr= [1,2,3];
let newArr = [...arr];
console.log(arr);
console.log(newArr);

//we can add values too
let extraValues = [...arr, 4,5,6];
console.log(extraValues);

//Objects
console.log('Objects');
let book = {
    title: 'Atomic habits',
    author: 'Don\'t know',
}
console.log(book);
let newBook = {
    ...book,
    year: 2000,
}
console.log(newBook);

//to pull nested object
let books = {
    title: 'Atomic habits',
    author: 'Don\'t know',
    relatedBooks: {
        title1: 'Success',
        title2: 'Learn from mistakes',
    }
}

let newBooks = {
    ...books,
}
console.log(newBooks);

//Too add values we need to use ... second time in nested object
let newBookObj = {
    ...books,
    relatedBooks: {
        title3: 'Be happy',
    }

}
console.log(newBooks); //you will see it's op is wrong this is not giving what we wanted 

//To properly make a use of it 
let newProperBook = {
    ...books,
    relatedBooks: {
        ...books.relatedBooks,
        title3: 'Be happy',
    }

}
console.log(newProperBook);


//Functions

let num = [1,2,3];
function sum(a,b,c){
    console.log(a+b+c);
}
//to use spread operator on function 
sum(...num);


//tasks

//1
const color = ['red','green','blue'];
let newColor = [...color];
color.pop();
console.log(color);
console.log(newColor);

//2
const user = {
    name: 'John',
    age: 25,
    occupation: {
        role: 'Developer',
    },
}

const newUser = {
    ...user,
    occupation:{
        ...user.occupation,
        experience : 'Fresher',
    },
}

console.log(user);
console.log(newUser);

//3

const movie = ['Jumanji', 1995];

function movieInfo(name, releaseDate){
    console.log(`The movie ${name} was released in ${releaseDate}`);
}

movieInfo(...movie);
