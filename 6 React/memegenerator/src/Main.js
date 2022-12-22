// import memesData from "./memesData"
import {useState, useEffect} from "react"

function Main() {
    // let newData = memesData.data.memes;
    // let randomNum = Math.floor(Math.random()* newData.length);
    let [memeImage, setMemeImage] = useState({
        topText : "Hello",
        bottomText: "Bye",
        randomImage: "https://i.imgflip.com/30b1gx.jpg",
    })

    let [allMemeData, setAllMemeImages] = useState([]);

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage(){
        // let newData = allMemeData.data.memes;
        let randomNum = Math.floor(Math.random()* allMemeData.length);
        let url = allMemeData[randomNum].url;
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
        // setMemeImage()
        // setMemeImage(newData[randomNum].memeImage.topText)
        // setMemeImage(newData[randomNum].memeImage.bottomText)
    }
    
    function handleChange(event) {
        const {name,value} = event.target
        setMemeImage(prevMeme =>({
            ...prevMeme,
            [name] :value
        }))
    }
    return (
        <main className="main">
            <div className='form'>
                <input type="text" placeholder="first text" name="topText" value={memeImage.topText} onChange={handleChange}/>
                <input type="text" placeholder="second text" name="bottomText" value={memeImage.bottomText} onChange={handleChange}/>
                <button className="btn" onClick={getMemeImage} >Get a new Meme image</button>
            </div>
            {/* <img src={getMemeImage()} alt="meme Images" className="meme-img"/> */}
            <div className="meme">
                <img src={memeImage.randomImage} alt="meme Images" className="meme-img"/>
                <h2 className="meme-text top">{memeImage.topText}</h2>
                <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}

export default Main