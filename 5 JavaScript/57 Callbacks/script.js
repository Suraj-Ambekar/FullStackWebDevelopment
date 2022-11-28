// Callbacks

const fetch = (username) => {
    setTimeout( () =>{
        return username
    } , 3000)
}

const usr = fetch('suraj');
// You will see we will get undefined in the output
// because execute code block within millisecond 
// and that's why there we have used setTimeout function 
// for a time being username is not set inside a function 
// so solving this we use callback()
// call back functio helps JS to wait
console.log(usr); 


// Above example using call back 
const fetched = (username, callback) =>{
    console.log('fetching......')
    setTimeout(()=>{
        callback({username});
    },4000)
    
}


fetched('Suraj', (usr)=> {console.log(usr.username);})