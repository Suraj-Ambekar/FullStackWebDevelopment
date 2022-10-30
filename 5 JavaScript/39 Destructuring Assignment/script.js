//Destructuring

// Two types of Destructuring
//1. Object Destructuring
console.log('Object Destructuring');

let book = {
    title:'What is coding',
    author: 'Suraj Ambekar',
    year: 2030,
};

//To assign keys to varible we use
// let title = book.title;
// let author = book.author;
// let year = book.year;

// console.log(title, author, year);

//OBject destructuring makes it easy to write 
let {title, author, year} = book;

console.log(title,author,year);

//What if we got nested object
let books = {
    titles:'What is coding',
    authors: 'Suraj Ambekar',
    years: 2030,
    character : {
        earning: '$10m',
        copySold: '10m',
    }
};

//To use in nested object 

let {titles , authors , years , character , character :{ earning, copySold}} = books;
console.log(title, author,year, character, earning, copySold);

//If we wanted to use new name then use this like 
let Books = {
    book: 'What book?',
};

let {book : newBook} = Books;
console.log(newBook);

//We can use destructuring on properties also
//like string property wanted to find out length of the string
let {length} = 'Suraj Ambekar';
console.log(length);

//2. Array Destructuring
console.log('Array Destructuring');

let fruits = ['mangos', 'orange', 'lemon'];

//To assign this to variable
// let mango = fruits[0];
// let orange = fruits[1];
// let lemon= fruits[2];

// console.log(mango,orange,lemon);

//To show this in array Destructuring
let [mango, orange, lemon] = fruits;

console.log(mango, orange, lemon);

//To use this on nested array
fruits = ['mangos', 'orange', 'lemon', ['banana','apple']];

let [mangos,oranges,lemons, [banana, apple]]= fruits;

console.log(mangos,oranges,lemons, banana,apple);


//Tasks
const user = {
    firstName: 'Suraj',
    country: 'India',
    todos: {
        1: 'Do the shopping',
        2: 'Play some games',
    },
};

let {firstName, country, todos, todos: {1: one,2: two}} = user;
console.log(firstName, country, todos, one, two);

const arr = ['booked','con'];

let [ booked, con] = arr;
console.log(booked, con);

const nestedArr = ['nest','guest',['west','south','east']];
let [nest, guest,[a, , c]]= nestedArr;
console.log(nest,guest,a ,c);







