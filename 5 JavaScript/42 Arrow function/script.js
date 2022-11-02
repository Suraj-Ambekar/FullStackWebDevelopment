//Arrow function

//OLD way to write a anonymous function

let sum = function(a,b){
    console.log(a+b);
}

sum(1,2);

//New way to write using arrow function
let sum2 = (a,b) => {
    console.log(a+b);
}
sum2(2,3)

//If you have no parameter
let sum3 = () => {
    console.log('Hello');
}
sum3()

//If you have only one parameter
let sum4 = a => {
    console.log(a);
}
sum4(2);

//If you use any only one line return keyword and not gonna add more
let sum5 = a => a;
console.log(sum5('hello'));

//Tasks

let user = name => `My name is ${name}`;
console.log(user('Suraj'));

let greeting = () => console.log('Hello, how are you?');
greeting();

let book = {
    title : 'The Fellowship of the Ring',
    related : ['The Two towers, The Return of the Kind'],
    showRelated: function() {
        this.related.forEach( (relatedBooks) => {
            console.log(`Title: ${this.title}`);
            console.log(`Related book: ${relatedBooks}`);
        });
    },
};

book.showRelated();