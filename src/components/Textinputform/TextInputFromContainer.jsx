import React, { useEffect, useState } from 'react';
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
    // useEffect(()=>{
    //     console.log("component loaded");   // not call on updates
    //     // You can add any initialization logic here if needed

    // },[]); //passing empty dependency array to run only on first load
    // useEffect(()=>{
    //     console.log("component first load and update");   //not passind depeency array so it will run on every update


    // });
    // useEffect(()=>{
    //     console.log("component first loaded and update value changed");   
        

    // },[inputValue]); // This effect will run whenever inputValue changes
    // useEffect(()=>{
    //     console.log("component first loaded and inputType changed");
    //     // This effect will run whenever inputType changes  
        

    // },[inputType]); // This effect will run whenever inputType changes

  
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