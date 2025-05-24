import React from 'react';
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}){
    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type={inputType}
                    label="Enter a word"
                    placeholder="Enter a word or a phrase"
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                    type="button" 
                />
            </div>
            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    );
}

export default TextInputForm;