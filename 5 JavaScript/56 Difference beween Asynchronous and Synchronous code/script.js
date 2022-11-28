// Difference between Asynchronous and Synchronous

//Synchronous
const funcO = () => {
    console.log('func1');
    funcT();
    console.log('func one, part 2')
}
const funcT = () => console.log('fun2');
funcO();

//Asynchronous
const funcF = () => {
    console.log('func4');
    funcS();
    console.log('func 4, part 2')
}
const funcS = () => {setTimeout(() => console.log('fun6'),5000)};
funcF();

