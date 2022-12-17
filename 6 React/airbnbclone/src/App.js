// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

function App() {

  const cards = data.map(item=>{
    return (
      <Card 
      key= {item.id}
      item= {item}
      // img={item.coverImg}  
      // rating={item.stats.rating}
      // high= {item.stats.reviewCount}
      // location= {item.location}
      // dec={item.title}
      // price={item.price}
      // openSpot= {item.openSpots}
      />
    )
  })

  return (
    <div className="App">
      < Navbar />
      < Hero />
      {/* < Card 
      img="./images/katie-zaferes.png" 
      star="./images/star.png" 
      rating="5.0"
      high= "(6)"
      location="USA"
      dec="Life Lessons with Katie Zaferes"
      price="136"
      /> */}
      <section className="card-list">
      {cards}
      </section>
    </div>
  );
}

export default App;
