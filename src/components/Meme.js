import MemesData from "../memesData.js"
import React, {useState} from "react"

function Meme() {
    const [meme, setMeme] = useState({
        topText:"",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = useState(MemesData)

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
            <div className="meme">
                <img src={meme.randomImage} 
                     className="meme--image" 
                     alt="" 
                />
                <h2 className="meme--text top">One does not simply</h2>
                <h2 className="meme--text bottom">Walk into Mordor</h2>
            </div>
        </main>
    )
}

export default Meme