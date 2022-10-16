import memesData from "../memesData.js"


function Meme() {
    function handleClick() {
        const memesArr = memesData.data.memes
        const item = Math.floor(Math.random()*memesArr.length)
        const url = memesArr[item].url
        console.log(url)
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
        </main>
    )
}

export default Meme