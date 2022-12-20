import memesData from "./memesData"
import {useState} from "react"

function Main() {
    // let newData = memesData.data.memes;
    // let randomNum = Math.floor(Math.random()* newData.length);
    let [memeImage, setMemeImage] = useState({
        topText : "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    })

    let [allMemeData, setAllMemeImages] = useState(memesData);

    function getMemeImage(){
        let newData = allMemeData.data.memes;
        let randomNum = Math.floor(Math.random()* newData.length);
        let url = newData[randomNum].url;
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
        // setMemeImage()
        // setMemeImage(newData[randomNum].memeImage.topText)
        // setMemeImage(newData[randomNum].memeImage.bottomText)
    }
    
    return (
        <main className="main">
            <div className='form'>
                <input type="text" placeholder="first text" />
                <input type="text" placeholder="second text" />
                <button className="btn" onClick={getMemeImage} >Get a new Meme image</button>
            </div>
            {/* <img src={getMemeImage()} alt="meme Images" className="meme-img"/> */}
            <img src={memeImage.randomImage} alt="meme Images" className="meme-img"/>
        </main>
    )
}

export default Main