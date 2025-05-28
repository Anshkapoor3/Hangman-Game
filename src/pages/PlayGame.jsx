import {Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/Button/LetterButtons/LetterButtons";
import React, { useState } from 'react';
import Hangman from "../components/HangMan/HangMan";
import { useContext } from "react";
import { WordContext } from "../../context/wordContext";


function PlayGame(){
    // const {state}= useLocation();

    const {word}=useContext(WordContext);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    function handleLetterClick(letter) {
        if(word?.toUpperCase().includes(letter.toUpperCase())){
            console.log('Correct')
        }else{
            console.log('Incorrect');
            setStep(step + 1); // Increment the step if the letter is incorrect
        }
            // If the letter is in the word, update the guessed letters
            setGuessedLetters([...guessedLetters, letter]);
        
        // setGuessedLetters([...guessedLetters,letter]);

    }

    return(
        <>
            <h1>play game </h1>
            
            {word &&(
                <>
                <Maskedtext text={word} guessedLetters={guessedLetters} />
            <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick=
            {handleLetterClick} />

            <div>
            <Hangman step={step} />
            </div>
                </>
            )}
            
            <Link to='/'>Home</Link>
            
            <Link to='/start' className="text-blue-400"> Start Game Link</Link>
        </>
    );
}

export default PlayGame;