// For...of loop


let arr = ['don','dons','lkf','my fellow'];

for ( x of arr){
    console.log(x);
}

for (b of arr){
    if ( b === 'my fellow'){
        break;
    }else{
        console.log(b);
    }
}

let str = 'JavaScript';

for ( c of str){
    console.log(c);
}


//Tasks

let colours = ['REd','orange','yellow','black'];

for ( d of colours){
    console.log(d);
}

for (z of colours){
    if ( z === 'black'){
        break;
    }else{
        console.log(z);
    }
}
