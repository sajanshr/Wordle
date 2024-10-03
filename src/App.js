import './App.css';
import React, { useEffect, useState } from 'react';

const WORD_LIST_API_URL = 'https://api.datamuse.com/words?sp=?????&max=5';
const WORD_LENGTH = 5;
const NUM_GUESSES = 6;

function App() {
  const [guesses, setGuesses] = useState(Array(NUM_GUESSES).fill(null));
  const [currentGuess, setcurrentGuess] = useState('');
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const fetchSolution = async () => {
      await fetch(WORD_LIST_API_URL)
      .then(response => response.json())
      .then(data => {
        const words = data.map(item => item.word);
        console.log(words)
        setSolution(words[Math.floor(Math.random() * words.length)].toLowerCase());
      })
    };

    fetchSolution();
  }, []);

  useEffect(() => {
    if(solution == null) return;

    const onPressKey = event => {
      if(guesses[NUM_GUESSES - 1] != null || guesses.includes(solution)){
        return;
      }
    
      const charCode = event.key.toLowerCase().charCodeAt(0);
      const isLetter = 
            event.key.length === 1 &&
            charCode >= 'a'.charCodeAt(0) &&
            charCode <= 'z'.charCodeAt(0); 

      setcurrentGuess(prevGuess => {
        if(event.key === 'Backspace') {
          return prevGuess.slice(0, -1);
        } else if (event.key === 'Enter' && prevGuess.length === WORD_LENGTH) {
          const currentGuessIndex = guesses.findIndex(guess => guess == null);
          const guessesClone = [...guesses];
          guessesClone[currentGuessIndex] = prevGuess;
          setGuesses(guessesClone);
          return '';
        } else if (prevGuess.length < WORD_LENGTH && isLetter){
          return prevGuess + event.key.toLowerCase();
        }
        return prevGuess;
      });
    };

    window.addEventListener('keydown', onPressKey);

    return () => window.removeEventListener('keydown', onPressKey);

  }, [solution, guesses]);

  const currentGuessIndex = guesses.findIndex(guess => guess == null);

  if(solution == null) return null;

  return (
    <div className="board">
      {
        guesses.map((guess, idx) => {
          return (
            <GuessLine
              key={idx}
              guess={(idx === currentGuessIndex ? currentGuess : guess ?? '').padEnd(WORD_LENGTH)}
              solution={solution}
              isFinal={currentGuessIndex >idx || currentGuessIndex === -1}
            />
          )
        })
      }
    </div>
  );
}

function GuessLine({guess, solution, isFinal}){
  return(
    <div className='line'>
      {
        guess.split('').map((char, idx) => {
          let className = 'tile';
          if(isFinal){
            if(char === solution[idx]){
              className += ' correct'
            } else if(solution.includes(char)){
              className += ' close';
            } else {
              className += ' incorrect';
            }
          }

          return <div key={idx} className ={className}>{char}</div>;
        })
      }
    </div>
  )
}
  
export default App;
