// Promises

// const fetched = (username, callback) =>{
//     console.log('fetching username......')
//     setTimeout(()=>{
//         callback({username});
//     },4000)
    
// }

const fetched = (username) =>{
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            console.log('fetching username......')
            resolve({username});
        },4000)
    });
}


// const fetchPhoto = (username, callback)=>{
//     console.log('fetching photos........');
//     setTimeout(() => {
//         console.log(`photos for ${username}`);
//         callback(['photo1','photo2']);
//     }, 3000);
// }

const fetchPhoto = (username)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('fetching photos........');
            console.log(`photos for ${username}`);
            resolve(['photo1','photo2']);
        }, 3000);
    })
}

// const fetchDetails = (photo,callback)=>{
//     console.log('fetching details........');
//     setTimeout(() => {
//         callback('Details....');
//     }, 2000);
// }

const fetchDetails = (photo)=>{
    return new Promise((resolve,reject)=>{
        console.log('fetching details........');
        setTimeout(() => {
            resolve('Details....');
        }, 2000);
    })
}

// This is we called as a callback hell because we have to use 
//more and more and more function within functions
//At on point it becomes unreadable and unmaintainable.
// fetched('Suraj', (usr)=> {console.log(usr.username);
//     fetchPhoto(usr.username,(photo)=>{console.log(photo);
//         fetchDetails(photo[0],(details)=>{console.log(`details are ${details}`);
    
//         });
//     });
// });

fetched('Suraj')
    .then((user)=> fetchPhoto(user.username))
    .then((photo)=> fetchDetails(photo[0]))
    .then((details)=> console.log('details:-',details))