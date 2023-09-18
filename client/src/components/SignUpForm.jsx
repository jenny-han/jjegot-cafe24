import React, {useRef, useState} from 'react';
import SignUpField from './SignUpField';
import SignUpAgree from './SignUpAgree';

import axios from 'axios'

const SignUpForm = () => {
    const formRef = useRef(null);
    const [customer, setCustomer] = useState({})
    const [error, setError] = useState(false)

    const handleSignup = (e) => {
        alert("회원가입 button")
        console.dir(e.target.elements)
        // // validate()
        // axios.post("http://localhost:4000/db/customer/insert",{
        //     userId :formRef.,

        // })
        e.preventDefault();
    }

    return (
        <div className='form-div' onSubmit={handleSignup}>
            <form ref={formRef} >
            
            <SignUpField />
            <SignUpAgree />
        
            <div className='signup-div'>
                <button type="submit" className='signup-btn' >가입하기</button>
            </div>
        </form>
        </div>
    );
};

export default SignUpForm;