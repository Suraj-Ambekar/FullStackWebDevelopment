//Function parameters and arguments

//parameters

function favGame(game){
    console.log(`My favourite game is ${game}`);
}
favGame("clash royal");
favGame("arrow");
favGame("cricket");

/* favGame(game) => game is the parameter
   favGame("clash royal") => "clash royal" is the argument*/

//Can use may parameters
function ninjaTurtle(name, weapon){
    console.log(name,weapon);
    }
ninjaTurtle("Donatello","Bo Staff");


function add(num1, num2){
    console.log(num1+num2);
    }
add(1,2,2,3,4,4); //only take two arguments others will be ignored


function add(num1, num2){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[3]); //we can use like an array but we arguments can't use array methods for this is we rest instead of arguments.
    }
add(1,2,2,3,4,4);

function check(game){
    if (game === undefined){
        alert('please provide your fav game. eg. check("mario")');
    }else{
        console.log(`my fav game is ${game}`);
    }
}
check("mario");

//Tasks 

function favFood(response){
    console.log(`your favourite food is ${response}`);
}

favFood("Pizza");

function favFoods(response = 'empty, please enter your fav food'){
    console.log(`your favourite food is ${response}`);
}

favFoods();

function favFoodss(response){
    if (response === undefined){
        alert('please provide your fav food');
    }else{
        console.log(`my fav game is ${response}`);
    }
}

favFoodss("Pizza");
