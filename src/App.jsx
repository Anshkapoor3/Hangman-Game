import './App.css'
import { Routes,Route } from 'react-router-dom'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/StartGame'
import Home from './pages/Home'
import { WordContext }  from '../context/wordContext'
import { useState } from 'react'
import { s } from 'framer-motion/client'
function App() {
  
 const [wordList, setWordList] = useState([]); // State to hold the list of words
 const [word,setWord]=useState('');
  return (
    <WordContext.Provider value={{ wordList, setWordList,setWord,word }}>
     <Routes>
      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
      <Route path='/' element={<Home />} />

     </Routes>    
     </WordContext.Provider>

   
  )
}

export default App


