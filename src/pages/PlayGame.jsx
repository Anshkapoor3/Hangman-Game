
import {Link,useLocation} from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
function PlayGame(){
    // const [searchParams]= useSearchParams();
    // console.log(searchParams.get);
    // const {text ,id}= useParams();

    const {state}= useLocation();



    return(
        
<>

<h1>play game {state.wordSelected} </h1>
<Maskedtext text={state.wordSelected} guessedLetters={['H','E']} />
 <Link to='/start'  className="text-blue-400"> Start Game Link</Link>

    </>
    );
}

export default PlayGame;