//Rest parameter

function restParameter(...z){
    console.log(z); //This is gonna act as an array because he have put values inside it
}
restParameter('Hey',"Hi",'Hello'); 

//If you add more parameters then ...z should be at last
function restParameters(a, b,...z){
    console.log(z); //op ['Hello']
}
restParameters('Hey',"Hi",'Hello'); 

//let's use rest and spread at one time

function restSpread(...l){ // rest operator
    //it is gonna make an array
    console.log(l); 
    //Spread gonna spread out values from an array
    console.log(...l); //spread operator
}
restSpread(1,2,3,4,5,5);


//Tasks
//1
function colours(...cl){
    console.log(cl);
}
colours('red','orange','yellow');

//2 and 3
function heroes(a,b,...c){
    console.log(c);
    console.log(c[2]);
    console.log(...c);
}
heroes('Superman','Batman','The Hulk','Iron Man','Wolverin');



