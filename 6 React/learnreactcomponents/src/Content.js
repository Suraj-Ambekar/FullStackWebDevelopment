const Content = ()=>{
    // newName function is created to generate random name.
    const newName = ()=>{
        let arr = ['Suraj', 'Kiran','Prajaktas'];
        let int = Math.floor(Math.random()*3);
        return arr[int];
      }
    return (
        <main>
            <p>
                {/* here we have showing the result of generated name */}
                Hello {newName()}
            </p>
        </main>
        
    );
    
}

export default Content