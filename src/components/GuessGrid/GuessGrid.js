import React from 'react';
// import NUM_OF_GUESSES_ALLOWED from '../../constants.js';

function GuessGrid({guesses}) {

  const remainingGuesses = 6 - guesses.length;

  return <>
    <div className='guess-results'>
    {
      guesses.map((word) => (
        <p key={crypto.randomUUID()} className='guess'>{
          word.map(({letter, status}) => (
              <span key={crypto.randomUUID()} className={'cell ' + status}>{letter}</span>
            ))
          }</p>
      ))
    }
    {
       [...Array(remainingGuesses)].map((index) => (
          <p key={crypto.randomUUID()} className='guess'>{
            [...Array(5)].map((char) => (
                <span key={crypto.randomUUID()} className='cell'></span>
              ))
            }</p>
        )
      )
    }
  </div>
  </>;
}

export default GuessGrid;
