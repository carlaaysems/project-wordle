import React from 'react';
import NUM_OF_GUESSES_ALLOWED from '../../constants.js';

function PreviousGuesses({guesses}) {
  return <>
  <div className='guess-results'>
    {
      guesses.map((guess) => (
        <p key={crypto.randomUUID()} className='guess'>{
            guess.split('').map((char) => (
              <span key={crypto.randomUUID()} className='cell'>{char}</span>
            ))
          }</p>
      ))
    }
  </div>
  </>;
}

export default PreviousGuesses;
