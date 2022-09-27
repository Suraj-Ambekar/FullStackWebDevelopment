// Template literals


let a = `sonic the Hedgehog`;
let b = `SEGA`;
let c = 1991;

//older way to concatenate is 
let d = a + " was released by "+ b + " in the year "+ c+ ".";
console.log(d);

// new version (template literals)

let e = `${a} was released by ${b} in the year ${c}.`;
console.log(e);

//older way to use a new line is 
let f = a +"\n"+ " was released by "+ b +"\n"+ " in the year "+ c+ ".";
console.log(f);

//new way to use a new line is 
let g = `${a} 
was released by ${b} 
in the year ${c}.`; //simply we have to write in a new line
console.log(g);

//Tasks
let firstName = "Suraj";
let course = "JavaScript";
let channel = "Dev Dreamer";

let info = `${firstName} is learning ${course} with ${channel}`;
console.log(info);








