const ALPHABETS="QWERTYUIOPASDFGHJKLZXCVBNM".split(''); // Array of uppercase letters

function LetterButtons({text,guessedLetters,onLetterClick}){
    const originalLetters = new Set(text.toUpperCase().split('')); // Set of unique letters in the text
    const guessedLettersSet = new Set(guessedLetters);
    
    const buttonStyle = function(letter){
        if(guessedLettersSet.has(letter)){
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'} text-white`;
        } else {
            return 'bg-blue-500';
        }
    }
    
    const buttons = ALPHABETS.map(letter => {
        return(
            <button
                key={`button-${letter}`}
                onClick={() => onLetterClick(letter)}
                disabled={guessedLettersSet.has(letter)}
                className={`h-12 w-12 m-1 rounded-md ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        );
    })
    
    return(
        <div className="flex flex-wrap gap-2 p-4">
            {buttons}
        </div>
    )
}

export default LetterButtons;