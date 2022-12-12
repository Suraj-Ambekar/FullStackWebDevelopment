const Content = ()=>{
    // newName function is created to generate random name.
    const newName = ()=>{
        let arr = ['Suraj', 'Kiran','Prajaktas'];
        let int = Math.floor(Math.random()*3);
        return arr[int];
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
            <p>
                {/* here we have showing the result of generated name */}
                Hello {newName()}
            </p>
            <button onClick={clickEvent}>Click me</button>
            <button onClick={() => clickEvent2('Hello')}>Click me</button>
            <button onClick={(e) => clickEvent3(e)}>Click me</button>
        </main>
        
    );
    
}

export default Content