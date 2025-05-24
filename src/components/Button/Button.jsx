import getButtonStyling from "./getButtonStyling";

function Button({text , onCLickHandler , styleType="primary",type="button"}){
    
return(
    <button
        onClick={onCLickHandler}
        type={type}
        className={`px-4 py-2  ${getButtonStyling(styleType)} text-white`}
        >
            {text}

    </button>
);


}



export default Button;  