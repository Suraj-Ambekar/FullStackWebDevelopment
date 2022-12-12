// importing useState to use useState
import { useState } from 'react';

const Content = ()=>{
    const [name, setName] = useState('Suraj');
    // newName function is created to generate random name.
    const newName = ()=>{
        let arr = ['Suraj', 'Kiran','Prajaktas'];
        let int = Math.floor(Math.random()*3);
        setName(arr[int]);
    }
    
    function clickEvent(){
        alert('Hello');
    }
    function clickEvent2(name){
        alert(`${name} clicked it.`);
    }
    function clickEvent3(e){
        console.log(e.target);
    }
    return (
        <main>
            <p >
                {/* here we have showing the result of generated name */}
                Hello {name}
            </p>
            <button onClick={newName}>Click me</button>
            <button onClick={() => clickEvent2('Hello')}>Click me</button>
            <button onClick={(e) => clickEvent3(e)}>Click me</button>
        </main>
        
    );
    
}

export default Content