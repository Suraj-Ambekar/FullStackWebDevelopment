//Array iterator

let supers = ['super','man','spider','mans','bat','manss','don'];

//forEach()

supers.forEach(
    function (value, index, array) {
        console.log(`The index of ${value} is ${index}`);
        console.log(array);        
    }
);


//map()

function upperCase(x){
    return x.toUpperCase();
}

let uCase = supers.map(upperCase);
console.log(uCase);

let numArr = [1,2,3,4,5,6];

function double(y){
    return y*2;
}

let newNumArr = numArr.map(double);
console.log(newNumArr);

//filter()

let num = [1,2,3,4,5,6,7,8,9,10,12,543,72,734,733,62,26];

let newNum = num.filter(
    function (value, index, array){
        return value % 2 === 0;
    }  
);

console.log(newNum);


// reduce()

let naturalNum = [1,2,3,4,5,6,7,8,9,1];
 
function add(total, value, index, array){  //total here is used to store the iterated values
    return total + value;
}

let nNum = naturalNum.reduce(add);
console.log(nNum);

// some()

let numbs = naturalNum.some(
    function (value){
        return value >10;
    }
)
console.log(numbs);

//every()

let numbss = naturalNum.every(
    function(value){
        return value < 10;
    }
);
console.log(numbss);

//find()

let arr = ['sria','sjf','sdkf','kjdfd'];

let newArr = arr.find(
    function (value){
        return value === 'sria';

    }
)
console.log(newArr);


//findIndex()

let newArrr = naturalNum.findIndex(
    function (value){
        return value === 'sria';

    }
)
console.log(newArrr);

