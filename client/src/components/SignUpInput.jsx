import React from 'react';

const SignUpInput = (props) => {
    const { type, id, name, value, handleChange, isRequired, labelTxt, errorMsg } = props;

    return (
        <div className='input-form'>
                <input type={type} id={id} name={name} value={value} onChange={handleChange} className='form-box' 
                        required={isRequired} ></input>
                <label htmlFor={id}>{labelTxt}</label>
                <span className='error'>{errorMsg}</span>
        </div> 
    );
};

export default SignUpInput;