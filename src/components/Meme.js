import memesData from "../memesData.js"
import {useState} from "react"


function Meme() {
    const [memeImage, setMemeImage] = useState("")

    function handleClick() {
        const memesArr = memesData.data.memes
        const item = Math.floor(Math.random()*memesArr.length)
        const url = memesArr[item].url
        setMemeImage(url)
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
                 src={memeImage} alt="" 
            />
        </main>
    )
}

export default Meme