import React from 'react';
import checkGuess from '../../game-helpers.js';

function GuessInput({pastGuesses, setPastGuesses, answer, setBannerMsg, setBannerClass}) {
  const [guessedWord, setGuessedWord] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('handling submit', guessedWord);
    const finalGuess = guessedWord.toUpperCase(); 

    if (finalGuess.length != 5) {
      window.alert('Please enter a 5-letter word.');
    } else if (pastGuesses.length == 6) {
      console.log('no more answers');
    } else {
      const somePastGuesses = [...pastGuesses, checkGuess(finalGuess, answer)];
      if (finalGuess == answer) {
        setBannerMsg("Congratulations! You got it in " + somePastGuesses.length + " guesses.");
        setBannerClass('happy banner');
      } else if (pastGuesses.length == 5) {
        setBannerMsg("Sorry, the correct answer is " + answer + " .");
        setBannerClass('sad banner');
      }
      setPastGuesses(somePastGuesses);
      setGuessedWord('');
    }
  }

  return <>
    <form onSubmit={event => {handleSubmit(event)}}>
      <label>Enter guess:</label>
      <input
       type="text"
       id="word-input"
       onChange={event => {
        setGuessedWord(event.target.value.toUpperCase());
       }}
       value={guessedWord}
      ></input>
    </form>
  </>;
}

export default GuessInput;
