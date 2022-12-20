import memesData from "./memesData"
import {useState} from "react"

function Main() {
    // let newData = memesData.data.memes;
    // let randomNum = Math.floor(Math.random()* newData.length);
    let [memeImage, setMemeImage] = useState(``)

    function getMemeImage(){
        let newData = memesData.data.memes;
        let randomNum = Math.floor(Math.random()* newData.length);
        setMemeImage(newData[randomNum].url)
    }
    
    return (
        <main className="main">
            <div className='form'>
                <input type="text" placeholder="first text" />
                <input type="text" placeholder="second text" />
                <button className="btn" onClick={getMemeImage} >Get a new Meme image</button>
            </div>
            {/* <img src={getMemeImage()} alt="meme Images" className="meme-img"/> */}
            <img src={memeImage} alt="meme Images" className="meme-img"/>
        </main>
    )
}

export default Main