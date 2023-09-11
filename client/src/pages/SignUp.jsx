import React from 'react';
import '../styles/SignUp.css'
import logo from '../assets/jjegot-seller-logo.png';


const SignUp = () => {
    return (
        <div>
            <div className='main-box'>
            <img src={logo} alt='logo' className='Main-logo'></img>
            <p className='main-txt'> 회원가입 </p>

            </div>
            
        </div>
    );
};

export default SignUp;