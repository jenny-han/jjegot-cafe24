import React from 'react';
import '../styles/Mainpage.css';
import logo from '../assets/jjegot_logo.png';

import Login from '../components/Login';

const Mainpage = () => {
    return (
        <div className='main-box'>
            <img src={logo} alt='logo' className='Main-logo'></img>
            <p className='main-txt'> 사업자 센터 </p>

            <Login />

        </div>
    );
};

export default Mainpage;