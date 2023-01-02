import React, {useState, useEffect} from "react"

function Meme() {
    const [meme, setMeme] = useState({
        topText:"",
        bottomText: "",
        randomImage: ""
    })

    const [allMemes, setAllMemes] = useState()

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data))
    }, [meme])

    function handleClick() {
        const memesArr = allMemes.data.memes
        const randomMeme = Math.floor(Math.random()*memesArr.length)
        const url = memesArr[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
      }

      function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    className="form--input"
                    placeholder="Top Text" 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
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
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme