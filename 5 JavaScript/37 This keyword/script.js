//This Keyword

//1. global object
console.log(this); // now it referes to the window so it can access window methods
//eg
// console.log(this.alert('hii'));

function hello(){
    console.log(this);
}
hello(); //function is window method that's why it can still access window methods 

//2. Inside a object

// let game = {
//     year: 1000,
//     release: function(){
//         console.log(year);
//     },
// }
// game.release(); // it wll throw an error 

//but if we use this.year then it will run because now this bound to object

let game1 = {
    year: 1000,
    release: function(){
        console.log(this.year);
    },
}
game1.release();

let game2 = {
    year: 1000,
    release: {
        main: 'don',
        hi: 'hello',
        yo: function(){
            console.log(this.hi);
        }
    },
}
game2.release.yo();

//3. DOM
const button = document.querySelector("button");
button.textContent = "Click me";

button.addEventListener("click", function(){
    console.log(this);
})

//Tasks

let book = {
    title: 'How to earn billions',
    author: 'Suraj Ambekar',
    info: function(){
        console.log(`${this.title} by ${this.author}`);
    }
}

book.info();

const user ={
    name: 'John',
    career: {
        employer: 'Google',
        title: 'Developer',
        info: function(){
            console.log(this.employer, this.title);
        }
    }
}

user.career.info(); 