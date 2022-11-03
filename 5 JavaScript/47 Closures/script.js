//Closures

const outer = () => {
    let outerVar = 1;
    console.log(outerVar);

    function inner() {
        console.log('inner',outerVar);
    }
    return inner;
}

outer();

let myFunc = outer();
myFunc();


//task

let crust = 'Crust';

let func = () =>{
    let mantle = 'Mantle';

    function newInner(){
        let core = 'Core';
        console.log(`The Earth is made of the ${crust}, the ${mantle} and the ${core}`);
    }
    return newInner;
}

let newFunc= func();
newFunc();