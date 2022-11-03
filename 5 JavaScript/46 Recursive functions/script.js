//Recursive Function

let greeting = () => {
    console.log('Hello world');
    //because we have not give any stopping condition it will go inside a infinite loop and will crash the browser
    //You should give a condition to stop the recursive function
    greeting(); 
}
// greeting(); //For time bing i am commenting this because it is gonna go inside a inside infinite loop

//count down of numbers using for loop
let num = 10;
for (let i = num;i >=0; i--){
    console.log(i);
}

//now solve above problem using recursive function
console.log('Below is the recursion output');

const countDown = (num) => {
    console.log(num);

    let updatedNum = num - 1;
    if (updatedNum >=0){        //This is how you should give a condition to stop the recursive function
        countDown(updatedNum);
    }
}

countDown(10);


//TAsks
console.log('Task output');

const countUp = (value) => {
    console.log(value);

    updatedValue = value + 1;

    if (updatedValue<=10){
        countUp(updatedValue);
    }
}

countUp(1);

