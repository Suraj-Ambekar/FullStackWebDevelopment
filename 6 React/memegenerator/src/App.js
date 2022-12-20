// import logo from './logo.svg';
// import './App.css';
// import Navbar from "./Navbar";
// import Main from "./Main";
import {useState} from 'react'

function App() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
})
/**
 * Challenge: Fill in the values in the markup
 * using the properties of our state object above
 * (Ignore `isFavorite` for now)
 */
let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";

function toggleFavorite() {
    // console.log("Toggle Favorite")
    setContact((prevContact )=> {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      }
    })
}

  return (
    // <div className="App">
    //   < Navbar />
    //   < Main />
    // </div>
    <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        // src={`../images/star-empty.png`} 
                        src={`../images/${starIcon}`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                      {contact.firstName} {contact.lastName} 
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
      </main>
  );
}

export default App;
