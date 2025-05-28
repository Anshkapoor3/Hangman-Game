import { useEffect,useContext } from "react";
import Button from "../components/Button/Button";
import {Link} from "react-router-dom";
import { WordContext } from "../../context/wordContext";
function Home(){
    
    const {setWordList,setWord} = useContext(WordContext);
    async function fetchWords () {
        const response =await fetch('http://localhost:3000/words');
        const data = await response.json();
        console.log(data);
        setWordList([...data]);

        const randomIndex = Math.floor(Math.random() * data.length);
        console.log(data[randomIndex]);
        setWord(data[randomIndex].wordvalue);
        
        
        
    }
    useEffect(() => {
        fetchWords();
    },[]);
return(
    <>
    <Link to="/play"  >
    <Button text="SinglePlayer game"  />
    </Link>

    <br />
    <Link to ="/start">
     <div className="mt-4">
         <Button text="MultiPlayer game" styleType="secondary" />
    
     </div>
       
    </Link>
   
    
    </>
)

}

export default Home;