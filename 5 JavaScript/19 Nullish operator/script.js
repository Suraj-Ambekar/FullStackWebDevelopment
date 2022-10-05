// Nullish Operator

let game; //undefined
let game2 = null; //null value
let game3= "hi"; //defined
let game4 = 0; //technical falsy but defined
console.log(
    game ?? game3
);


/*OR operator is same as NULL but OR return first falsy value
 and NULL return first undefined value*/

console.log(
    game4 || game3
); 
/*here op should be 0 but OR returns hi because it consider 
game4 as falsy but it is a defined value so for this 
we used NULLISH operator*/

console.log(
    game4 ?? game3
);

//tasks

let course;
console.log( 
    course ?? "Please select a course"
);

let courseProgress = 0;
console.log(
    courseProgress ?? "Start the course"
);