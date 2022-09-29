// Logical operator

let a = 1; //true
// a = !a; //now it becomes false
// console.log(typeof a,a);

b= 0;

if (a){
    console.log("hello,  true");
}
if (b){
    console.log("hello,  false");
}

if (a && b){
    console.log("hello, one of them is not true");
}

if (a || b){
    console.log("hello, one of them is true");
}

a || alert("This is ignored since x is true");
b || alert("this is alerted since y is false");

// Tasks
let x= "dev dreamer";
let y= '';
if (x || y){
    console.log("hello, one of them is true");
}

if (x && true && !y){
    console.log("hello, all are true");
}

c = -1;
d = 1;
if (c && d ){
    console.log("hello, all the true");
}