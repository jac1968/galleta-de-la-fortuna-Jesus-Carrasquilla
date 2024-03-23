import React from 'react'

const ShowPhrases = ({phrase}) => {
  return (
    <div className='text'>
        <p>{phrase.phrase}</p>
        <p>Fuente : {phrase.author}</p>
    </div>
  )
}

export default ShowPhrases