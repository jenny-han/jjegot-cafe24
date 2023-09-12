import React from 'react';
import '../styles/SignUp.css'
import logo from '../assets/jjegot-seller-logo.png';
import SignUpField from '../components/SignUpField';
import SignUpAgree from '../components/SignUpAgree';


const SignUp = () => {
    return (
        <div>
            <div className='main-box'>
                <img src={logo} alt='logo' className='Main-logo'></img>
                <p className='main-txt'> 회원가입 </p>
           
            
            <SignUpField />
            <SignUpAgree />
            </div>
            
        </div>
    );
};

export default SignUp;