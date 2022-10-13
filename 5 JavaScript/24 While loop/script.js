//While loop
console.log("This op is using While loop")
let i =0; //initializer
while( i<=10){ //condition
    console.log(i);
    i++; // final expression
}

console.log("This op is using Do While loop")
a = 0;
do{
    console.log(a);
    a++;  //Final Expression
} while (a <= 10) //Condition


//Tasks

let x = 0;

while(x <=100){
    console.log(`The speed of the car is ${x}MPH`);
    x +=10;
}

// above op using for loop
console.log("above op using for loop");
for (let b= 10; b <= 100; b+= 10){
    console.log(`The speed of the car is ${b}MPH`);
}

// 2nd task
let c= 1;
let d=10;

do{
    console.log(c);
    c +=1;
} while(c <=d)