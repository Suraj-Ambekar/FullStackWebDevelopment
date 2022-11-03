//Pure and Impure function

let sum = (n1,n2) => console.log(n1+n2);
sum(2,3);
sum(5,23); //you can refresh this as many time as you want but op will be same

// IT does not gonna change environmet

let sums = (n1,n2) => console.log(n1+n2);
let x= 'he'; //sums() is not affecting x variable
sums(2,3);


//Impure

let randomNum = n => console.log(n +Math.random());

randomNum(5); //As you refresh op is always gonna change that's why it is imprue

//IT is gonna affect environmetn
let intialValue = 0;

console.log(`The initial value is: ${intialValue}`);

let newValue = (n3, n4)=>{
    let add = n3+n4;
    intialValue = add; 
    return add;
}

// newValue(4,6);
console.log(newValue(4,6));

console.log(`The ia; after ${intialValue}}`)