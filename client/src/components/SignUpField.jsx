import React, { useEffect, useState } from 'react';
import Timer from '../utils/timer';
import SignUpAgree from './SignUpAgree';
import SignupPhoneCertification from './SignupPhoneCertification';

const SignUpField = () => {

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    // const [phoneConfirm, setPhoneConfirm] = useState("")
    
    const [submit, setSubmit] = useState(false)
    const [error, setError] = useState(false)


    const handleUserId = (e) => {
        setUserId(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handlePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    }
    const handleUserName = (e) => {
        setuserName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value);
    }


    return (
        <div className='field-div'>
            <div className='input-form'>
                <input type="text" name='userId' id='uid' value={userId} onChange={handleUserId} className='form-box' maxLength={20} required></input>
                <label htmlFor='uid'>아이디 (영문, 숫자 최대 20자) </label>
            </div>
            <div className='input-form'>
                <input type="password" id="pw" name='password' value={password} onChange={handlePassword} className='form-box' autoComplete='off' maxLength={15} required></input>
                <label htmlFor='pw'>비밀번호 (영문, 숫자, 특수문자 포함 8-15자리)</label>
            </div>
            <div className='input-form'>
                <input type="password" id='pwConfirm' name='passwordConfirm'autoComplete='off' value={passwordConfirm} onChange={handlePasswordConfirm} className='form-box' required></input>
                <label htmlFor='pwConfirm'>비밀번호 확인</label>
            </div>
            <div className='input-form'>
                <input type="text" id='uName'name='userName' value={userName} onChange={handleUserName} className='form-box' required></input>
                <label htmlFor='uName'>이름</label>
            </div>
            <div className='input-form'>
                <input type="email" id='em' name='email' value={email} onChange={handleEmail} className='form-box' required></input>
                <label htmlFor='em'>이메일</label>
            </div>
            <div className='input-form'>
                    <input type="text" id='pnum' name='phone' value={phone} onChange={handlePhone} className='form-box' required></input>
                    <label htmlFor='pnum'>휴대폰번호('-' 제외)</label>
            </div> 

            {/* 휴대폰 인증번호를 통한 회원가입 */}
            {/* <SignupPhoneCertification /> */}
    
            

        </div>
    );
};

export default SignUpField;