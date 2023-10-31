import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import PreviousGuesses from '../PreviousGuesses/PreviousGuesses';
import GuessGrid from '../GuessGrid';
import checkGuess from '../../game-helpers.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [pastGuesses, setPastGuesses] = React.useState([]);
  const [bannerMsg, setBannerMsg] = React.useState(false);
  const [bannerClass, setBannerClass] = React.useState('');

  return <>
    <GuessGrid guesses={pastGuesses}></GuessGrid>
    <GuessInput setPastGuesses={setPastGuesses} pastGuesses={pastGuesses} answer={answer} setBannerMsg={setBannerMsg} setBannerClass={setBannerClass}></GuessInput>

    <div className={bannerClass}>
      <p>{bannerMsg}</p>
    </div>

  </>;

}

export default Game;
