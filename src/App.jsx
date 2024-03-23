import './App.css'
import arrayPhrases from "./utils/phrases.json"
import getRandom from "./services/getRandom"
import { useState } from 'react'
import ShowPhrases from './components/ShowPhrases'
import ButtonPhrases from './components/ButtonPhrases'
import arrayImages from './utils/images.json'

function App() {
  
  const [phrase, setPhrase] = useState(getRandom(arrayPhrases))

  const [image, setImage] = useState(getRandom(arrayImages))

  const objStyle = {backgroundImage: `url(../img/fondo${image}.png)`}
 
  return (
      <div className='app' style={objStyle}>
        <h1 className='title'>🥠 Galleta de la Fortuna</h1>
        <ButtonPhrases
        setPhrase={setPhrase}
        setImage={setImage}
        />
        <ShowPhrases 
          phrase={phrase} />
      </div>
  )
}

export default App
