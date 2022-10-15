//Function Return Keyword

function test(){

}
console.log(test()); //op -undefined because func does not return anything


function tested(){ 
    return 'hello';
    return 'no';
}
console.log(tested()); 

//Tasks

function favNum(num){
    return num;
    
}

let myFavNum = favNum(3);
console.log(`my fav number is ${myFavNum}`);

function pass(a){
    if (a.length>8){
        return console.log(`you chose ${a}`);
    } else{
        return console.log('not enough letters')
    }
}

pass('jldfjldljds');
pass('kjdf');

