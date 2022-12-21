// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";

// imported header, content, and footer 
// import Header from './Header';
// import Content from './Content';
// import Footer from './Footer';
// import React from "react"
// import Joke from "./Joke"
// import jokesData from "./jokesData"

function App() {
  // return (
  //   <div className="App">
  //     {/* added header,content, and footer here */}
  //     {/* <Header />
  //     <Content />
  //     <Footer /> */}
  //   </div>
  // );
//   const jokeElements = jokesData.map(joke => {
//     return (
//         <Joke 
//             key={joke.id}
//             setup={joke.setup} 
//             punchline={joke.punchline} 
//         />
//     )
// })
// return (
//     <div>
//         {jokeElements}
//     </div>
// )
/**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */


const [forms, setForms] = useState({
  email: "",
  password: "",
  confirmPass: "",
  confirm: true
})

console.log(forms)


function handleChange(event){
  const {name, value, type, checked} = event.target
  setForms(prevData =>({
      ...prevData,
      [name]: type === "checkbox" ? checked : value 
    
  }))
}
    
function handleSubmit(event) {
  event.preventDefault()
  if (forms.password === forms.confirmPass){
    console.log("successfule")
  } else {
    console.log("unsuccessful")
    return
  }
  if(forms.confirm) {
    console.log("thanks")
  }
}

return (
  <div className="form-container" onSubmit={handleSubmit}>
      <form className="form" onSubmit={handleSubmit}>
          <input 
              type="email" 
              placeholder="Email address"
              className="form--input"
              name="email"
              value={forms.email}
              onChange={handleChange}
          />
          <input 
              type="password" 
              placeholder="Password"
              className="form--input"
              name="password"
              value={forms.password}
              onChange={handleChange}
          />
          <input 
              type="password" 
              placeholder="Confirm password"
              className="form--input"
              name="confirmPass"
              value={forms.confirmPass}
              onChange={handleChange}
          />
          
          <div className="form--marketing">
              <input
                  id="okayToEmail"
                  type="checkbox"
                  checked={forms.confirm}
                  onChange={handleChange}
                  
              />
              <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button 
              className="form--submit"
          >
              Sign up
          </button>
      </form>
  </div>
)
}

export default App;
