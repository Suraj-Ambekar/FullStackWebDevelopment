// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }



  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
