//Event Listeners

// onclick

const btn = document.querySelector('#btn');
console.log(btn);

function alrt(){
    alert('I Love JavaScript!')
};

btn.addEventListener("click", alrt);

// mouseover

const div = document.querySelector('.container');
console.log(div);

function bgColor(){
    div.style.backgroundColor = "blue";
};

div.addEventListener("mouseover",bgColor);

// Reveal Event 

const butn = document.querySelector('.reveal-btn');
console.log(butn);
const p = document.querySelector('.hidden-content');
console.log(p);

function revealContent(){
    if (p.classList.contains('reveal-btn')){
        p.classList.remove('reveal-btn');
    }else{
        p.classList.add('reveal-btn');
    }
}

butn.addEventListener('click',revealContent);

