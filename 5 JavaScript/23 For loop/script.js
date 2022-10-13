//for loop

//program to print 10 numbers
for (let i = 1; i<=10; i++){
    console.log(i);
}

//program to print an array on html page
const charArray = ['mangal','bhagwan','kiran','suraj'];
let para = document.querySelector('p');
let info = `This four are one family- `;


for (let i=0; i< charArray.length; i++){
    if (i === charArray.length-1){
        info += `and ${charArray[i]}.`;
    }else{
        info += `${charArray[i]}, `;
    }
}

para.innerText = info; 
/*for using innerText add script link inside body tag. if you try to add script
link inside head tag then it is gonna throw an error and not gonna execute*/

//Task

const favColors = ['red','green','yellow','orange','pink','blue','black','white'];

for (let i = 0; i < favColors.length; i++){
    console.log(`${favColors[i]} is my fav color!`)
}
