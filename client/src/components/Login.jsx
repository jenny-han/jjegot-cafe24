import React, { useState } from 'react';
import '../styles/Login.css'

const Login = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const [passwordType, setPasswordType] = useState('password')


    const handleInputId = (e) => {
        let value = e.target.value
        //영문, 숫자만 입력 가능.
        value = value.replace(/[^A-Za-z0-9]/ig, '')
        setInputId(value)

    }

    const handleInputPw = (e) => {
        let value = e.target.value
        //영문, 숫자, 특수문자 만 입력 가능.
        value = value.replace(/[^a-zA-Z0-9!@#$%^&*=+]/ig, '')
        setInputPw(value)
    }

    const togglePassword =()=>{
        if(passwordType === "password") {
         setPasswordType("text")
         return;
        }
        setPasswordType("password")
      }

    const onClickLogin = () => {
        alert("로그인 버튼 click")
    }

    return (
        <div>
            <div className='input-div'>
                <label htmlFor='input_id'>아이디</label>
                <input type="text" id='input_id' value={inputId} onChange={handleInputId} className='input-box'></input>
            </div>
            <div className='input-div'>
                <label htmlFor='input_pw'>비밀번호</label>
                <input type={passwordType} id='input_pw' value={inputPw} onChange={handleInputPw} className='input-box'></input>
               <span className='icon-pw' onClick={togglePassword}>
               { passwordType==="password"? <i className="bi pw-hidden"></i> :<i className="bi pw-view"></i> }
               </span>
           </div>
            <div className='login-div'>
                <button type="submit" className='login-btn' onClick={onClickLogin} >로그인</button>
            </div>
            <div className='line-block'>
                <div><a href='#'>아이디찾기</a></div>
                <div>|</div>
                <div><a href='#'>비밀번호찾기</a></div>
            </div>
        </div>
    );
};

export default Login;