//Deep cloning


const obj = { name: 'Suraj', school: {name:'Nabar'}};

const stringifiedObj = JSON.stringify(obj);
console.log(stringifiedObj); //In op you will see this has become a string

const newObj = JSON.parse(stringifiedObj);
console.log(newObj); // now we have converted string into an object
//OR 
//you can clone it in one line
const object = JSON.parse(JSON.stringify(obj));
console.log(object);


//Now we can access and change all the values

newObj.school.name = 'I.E.S S.V. Nabar Guruji Vidhyalaya';
console.log(newObj);
