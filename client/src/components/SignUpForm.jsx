import React from 'react';
import SignUpField from './SignUpField';
import SignUpAgree from './SignUpAgree';

const SignUpForm = () => {

    const handleSignup = (e) => {
        alert("회원가입 button")
        e.preventDefault();
    }

    return (
        <div className='form-div'>
            <form>
            
            <SignUpField />
            <SignUpAgree />
        
            <div className='signup-div'>
                <button type="button" className='signup-btn' onClick={handleSignup} >가입하기</button>
            </div>
        </form>
        </div>
    );
};

export default SignUpForm;