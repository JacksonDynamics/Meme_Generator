import MemesData from "../memesData.js"
import {useState} from "react"

function Meme() {
    const [meme, setMeme] = useState({
        topText:"",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages] = useState(MemesData)

    
    function handleClick() {
        const memesArr = allMemeImages.data.memes
        const randomMeme = Math.floor(Math.random()*memesArr.length)
        const url = memesArr[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
      }

    return(
        <main>
            <div className="form">
                <input type="text"
                       className="form--input"
                       placeholder="Top Text" 
                />
                <input type="text"
                       className="form--input"
                       placeholder="Bottom Text" 
                />
                <button onClick={handleClick} 
                        className="form--button">
                    Get a new meme image
                </button>
            </div>
            <img className="meme--image" 
                 src={meme.randomImage} 
                 alt="" 
            />
        </main>
    )
}

export default Meme