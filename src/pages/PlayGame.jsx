import {Link,useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/Button/LetterButtons/LetterButtons";
import React, { useState } from 'react';
import Hangman from "../components/HangMan/HangMan";


function PlayGame(){
    const {state}= useLocation();

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    function handleLetterClick(letter) {
        if(state.wordSelected.toUpperCase().includes(letter.toUpperCase())){
            console.log('Correct')
        }else{
            console.log('Incorrect');
            setStep(step + 1); // Increment the step if the letter is incorrect
        }
            // If the letter is in the word, update the guessed letters
            setGuessedLetters([...guessedLetters, letter]);
        
        setGuessedLetters([...guessedLetters,letter]);

    }

    return(
        <>
            <h1>play game </h1>
            <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters} />
            <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick=
            {handleLetterClick} />

            <div>
            <Hangman step={step} />
            </div>
            
            
            <Link to='/start' className="text-blue-400"> Start Game Link</Link>
        </>
    );
}

export default PlayGame;