// For...in loop

let character = {
    name: 'suraj',
    middleName: 'bhagwan',
    surname: 'ambekar',
}

for ( let i in character){
    console.log(`${i}: ${character[i]}`)
}


let salaries = {
    suraj: 10000000000000000000,
    kiran: 10000000000000000000,
    bapu: 100000000000000000000,
    mummy: 100000000000000000000,
}

for (let x in salaries){
    console.log(`${x} earns ${salaries[x]} in per day`)
}


//tasks

let house = {
    type: 'Detatched',
    build: 'brick',
    year: 2019,
    price: 250000,
    driveway: true,
}

for ( let b in house){
    console.log(`${b}: ${house[b]}`);
}