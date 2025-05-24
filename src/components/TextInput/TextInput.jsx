function TextInput({type="text",label , placeholder="enter text here" , value,onChangeHandler}){

return(
    
    <label>

<span className="text-gray-700">{label}</span>
    <input

    type={type}
    className="border border-gray-300 rounded-md px-4 py-2 mt-2 w-full"
    placeholder={placeholder}
    value={value}
    onChange={onChangeHandler}

   
   
   
   
   />

    </label>
)

}

export default TextInput;