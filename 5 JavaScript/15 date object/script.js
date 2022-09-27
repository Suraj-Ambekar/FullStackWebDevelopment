// Date object

let currentDate = new Date();
console.log(currentDate);

let milliSeconds = new Date(446464544646);
console.log(milliSeconds);

let dataString = new Date("Sep 27 2022 14:31:00");
console.log(dataString);

let componentDate = new Date(2022, 08,27,14,33,0,0);
console.log(componentDate);

//get methods
console.log(
    currentDate.getFullYear(),
    currentDate.getHours(),
    currentDate.getMinutes()
);


//set methods

currentDate.setFullYear(2000);
console.log(currentDate.getFullYear());

console.log(currentDate.toLocaleString('default', {
    month: 'long',
    weekday: 'long'
}));


// tasks


let date = new Date();
console.log(date);


let hour = new Date();
let min = new Date();
console.log(hour.getHours()+":"+min.getMinutes());
//or 
let hr = date.getHours();
let mn = date.getMinutes();
console.log(`${hr}:${mn}`);

console.log(date.toLocaleString('default',{weekday: 'long'}));