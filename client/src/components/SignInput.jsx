import React, { useState } from 'react';

const SignUpInput = (props) => {
    const { type, id, name, value, max, auto, handleChange, handleBlur, isRequired, labelTxt, errorMsg } = props;
    const [inputType, setInputType] = useState(type)

    const togglePassword = () => {
        if (inputType === "password") {
            setInputType("text")
            return;
        }
        setInputType("password")
    }

    return (
        <div className='input-form'>
            <input className='form-box' 
                type={inputType} 
                id={id} 
                name={name} 
                value={value}
                onChange={handleChange} 
                onBlur={handleBlur}
                maxLength={max} 
                required={isRequired} 
                autoComplete={auto}></input>
                
            <label htmlFor={id}> {labelTxt} </label>

            {/* password show / hide icon */}
            {(id === "pw" || id === "pwC") &&
                <span className='icon-pw-show' onClick={togglePassword}>
                    {inputType === "password" ? <i className="bi pw-hidden"></i> : <i className="bi pw-view"></i>}
                </span>}
        </div>
    );
};

export default SignUpInput;