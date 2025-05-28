
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { WordContext } from './components/context/wordContext.js'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>   
     <App />
     
     </BrowserRouter>
     

    
  
)
