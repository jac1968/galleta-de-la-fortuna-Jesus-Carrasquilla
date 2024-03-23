import React from 'react'
import getRandom from '../services/getRandom'
import arrayPhrases from "../utils/phrases.json"  
import arrayImages from '../utils/images.json'      

const ButtonPhrases = ({setPhrase, setImage}) => {

    const handlePhrase = () => {
        setPhrase(getRandom(arrayPhrases))
        setImage(getRandom(arrayImages))
    }
  return (
    <button className="btn" onClick={handlePhrase}>Probar mi suerte</button>
  )
}

export default ButtonPhrases