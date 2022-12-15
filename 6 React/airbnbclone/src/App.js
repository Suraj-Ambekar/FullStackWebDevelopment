// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
// import Hero from "./Hero";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      < Navbar />
      {/* < Hero /> */}
      < Card 
      img="./images/katie-zaferes.png" 
      star="./images/star.png" 
      rating="5.0"
      high= "(6)"
      location="USA"
      dec="Life Lessons with Katie Zaferes"
      price="136"
      />
    </div>
  );
}

export default App;
