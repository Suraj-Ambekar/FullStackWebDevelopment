//call , apply and bind methods

// Call and Apply
const game = {
    title: 'Sonic the Hedgehog',
    year: 1991,
};

function info(){
    console.log(`${this.title} was released in ${this.year}`);
}

info.call(game);
//Apply is also same 
info.apply(game);

//Then what is the difference between CALL and APPLY
//CALL and APPLY differnce comes under how we give arguments so let's see

function inform(character, num){
    console.log(`${this.title} was released in ${this.year}. ${character} and ${num} are extras. `);
}

inform.call(game, 'newChar', 200); //This is how we give arguments in call
// inform.apply(game, 'newChar', 200); //This will show an error
inform.apply(game, ['newChar', 200]); //This is how we give arguments in apply

//Bind method
let gameInfo = inform.bind(game, 'newChar', 200);
gameInfo(); // Now we can use as many time as we want


//Tasks

console.log('TASKS');

const book = {
    title: 'How to become don',
    author: 'Don',
};

function bookInfo(){
    console.log(`Author of ${this.title} is ${this.author}`);
}

bookInfo.call(book);

function bookInfo2(year){
    console.log(`Author of ${this.title} is ${this.author} and year is ${year}`);
}

bookInfo2.apply(book , [2000]);

let newBookInfo = bookInfo2.bind(book, [2000]);
newBookInfo();



