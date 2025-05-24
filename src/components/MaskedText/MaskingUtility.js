export function getMaskedString(originalWord,guessedLetters) {
    guessedLetters=guessedLetters.map(letter=> letter.toUpperCase());  //[h,m,e]-> [H,M,E]

    const guessedLetterSet= new Set(guessedLetters);
    const result=originalWord=originalWord.toUpperCase().split('').map(letter => {  //['H','_','B','_';]
        if(guessedLetterSet.has(letter)) {
            return letter;
        }else{
            return '_';
        }


    })
     return result;


}