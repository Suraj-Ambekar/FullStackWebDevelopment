// Switch Statement

let a = 10;

let today = new Date().toLocaleString('default', {weekday: 'short'});

switch (a) {
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    case 5:
        console.log("a is 5");
        break;
    case 10:
        console.log("a is 10");
        break;
    default:
        console.log("a is not matched with anything");
        break;
}

switch (true){
    case today === 'Mon':
        console.log(`today is ${today}`);
        break;
    case today === 'Tue':
        console.log(`today is ${today}`);
        break;
    case today === 'Wed':
        console.log(`today is ${today}`);
        break;
}

// tasks

console.log("here onwards op will be of tasks")

let favFood = 'panipuri';

switch (favFood){
    case 'ice-cream':
        console.log(`That's right ${favFood} is my favourite!`);
        break;
    case 'dhahipuri':
        console.log(`That's right ${favFood} is my favourite!`);
        break;
    case 'papad':
        console.log(`That's right ${favFood} is my favourite!`);
        break;
    case 'mango':
        console.log(`That's right ${favFood} is my favourite!`);
        break;
    case 'panipuri':
        console.log(`That's right ${favFood} is my favourite!`);
        break;
    default:
        console.log("Fav Food not found... I'm hungry");
        break;
}