import logo from './logo.svg';
import './App.css';

const newName = ()=>{
  let arr = ['Suraj', 'Kiran','Komal'];
  let int = Math.floor(Math.random()*3);
  return arr[int];
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world! <br></br>
          Hello {newName()}!
        </p>
        
      </header>
    </div>
  );
}

export default App;
