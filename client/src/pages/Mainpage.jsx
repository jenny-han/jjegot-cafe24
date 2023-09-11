import React from 'react';
import '../styles/Mainpage.css';
import logo from '../assets/jjegot-seller-logo.png';

import Login from '../components/Login';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
    const navigate = useNavigate();
    const gotoSignUp = () => {
        navigate("/signup")
    }

    return (
        <div className='main-box'>
            <img src={logo} alt='logo' className='Main-logo'></img>
            <p className='main-txt'> 판매자 로그인 </p>

            <Login />

            <div className='regi-box'>
                <p>자재이곳을 처음 이용하시나요?</p>
                <div className='regi-div' onClick={gotoSignUp}>
                    회원가입
                    </div>
            </div>

        </div>
    );
};

export default Mainpage;