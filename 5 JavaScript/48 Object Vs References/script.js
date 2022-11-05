// value vs references

//for primitives will be same.



let x = 1; 
let y = x;  //assigned x to y so y is 1
x = 2; //changed x to 2

console.log(x); //op 2
console.log(y); // 1


//But when we use non primitives method

let obj = {       //add abs223
    name: 'Suraj',
}

let newObj = obj; //it is same that's why abs223

obj.name = 'Kiran'; 

console.log(obj); // op kiran 
console.log(newObj); //op suraj

//but for above we get different op not expected one. We got kiran and kiran
//Because JS saves non primitives by their address and primitives by there values.


