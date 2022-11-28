//Callback Hell

const fetched = (username, callback) =>{
    console.log('fetching username......')
    setTimeout(()=>{
        callback({username});
    },4000)
    
}

const fetchPhoto = (username, callback)=>{
    console.log('fetching photos........');
    setTimeout(() => {
        console.log(`photos for ${username}`);
        callback(['photo1','photo2']);
    }, 3000);
}

const fetchDetails = (photo,callback)=>{
    console.log('fetching details........');
    setTimeout(() => {
        callback('Details....');
    }, 2000);
}

// This is we called as a callback hell because we have to use 
//more and more and more function within functions
//At on point it becomes unreadable and unmaintainable.
fetched('Suraj', (usr)=> {console.log(usr.username);
    fetchPhoto(usr.username,(photo)=>{console.log(photo);
        fetchDetails(photo[0],(details)=>{console.log(`details are ${details}`);
    
        });
    });
});