// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import data from "./data";

function App() {
  let info = data.map((item)=>{
    return(
      < Main 
        id= {item.id}
        item = {item}
      />

    )
  })
  return (
    <div className="App">
      < Navbar />
      {info}
    </div>
  );
}

export default App;
