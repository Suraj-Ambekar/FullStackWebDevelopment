//Elements properties and methods

const btn = document.getElementById('btn');
console.log(btn);

//Properties

//to get class list
console.log(btn.classList);

//to get class name
console.log(btn.className);

//to get id
console.log(btn.id);

//to get inner HTML
console.log(btn.innerHTML);


//Methods

//addEventListener()
btn.addEventListener('dblclick', () => {alert('you have double clicked it');});

//getBoundingClientReact()
console.log(btn.getBoundingClientRect());

//hasAttribute()
console.log(btn.hasAttribute('id'));
console.log(btn.hasAttribute('type'));
console.log(btn.hasAttribute('class'));
//removeAttribute()
console.log(btn.removeAttribute('class'));
console.log(btn.hasAttribute('class'));