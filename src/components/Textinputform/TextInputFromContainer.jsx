import React, { use, useState } from 'react';
import TextInputForm from "./TextInputForm";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function TextInputFromContainer() {
    // Fix the state declaration and initialization
    const [inputType, setInputType] = useState("password");
    const [inputValue, setInputValue] = useState(""); 
    
    const navigate= useNavigate();    //use navigate is a hook that returns a navigate function

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted", inputValue);

        if(inputValue){
            
                navigate(`/play`,{state:{wordSelected:inputValue}});
            
            // navigate("/play");
        }
    }
  
    function handleTextInputChange(event) {
        console.log("Text input changed", event.target.value);
        setInputValue(event.target.value);
    }
  
    // Fix the show/hide click handler
    function handleShowHideClick() {
        console.log("Show/Hide button clicked");
        
        // IMPORTANT FIX: This is the correct way to toggle the state
        setInputType(inputType === "password" ? "text" : "password");
    }
  
    return (
        <div>
            <TextInputForm
                inputType={inputType}
                handleFormSubmit={handleFormSubmit}
                handleTextInputChange={handleTextInputChange}
                handleShowHideClick={handleShowHideClick}
            />
            
            
            </div>
        
    );
}

export default TextInputFromContainer;