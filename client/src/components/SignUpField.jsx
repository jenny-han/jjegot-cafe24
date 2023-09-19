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


    const handleUserId = (e) => {
        let value = e.target.value
        //영문, 숫자만 입력 가능.
        value = value.replace(/[^A-Za-z0-9]/ig, '')
        setUserId(value);
    }
    const handlePassword = (e) => {
        let value = e.target.value
        //영문, 숫자, 특수문자 만 입력 가능.
        value = value.replace(/[^a-zA-Z0-9!@#$%^&*=+]/ig, '')
        setPassword(value)
    }
    const handlePasswordConfirm = (e) => {
        let value = e.target.value
        //영문, 숫자, 특수문자 만 입력 가능.
        value = value.replace(/[^a-zA-Z0-9!@#$%^&*=+]/ig, '')
        setPasswordConfirm(value);
    }
    const handleUserName = (e) => {
        let value = e.target.value
        //영문, 한글만 입력 가능.
        value = value.replace(/[^A-Za-z][^ㄱ-ㅣ가-힣]/ig, '')
        setuserName(value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const checkEmail = (e) =>{
        let emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/ig
        if(emailcheck.test(e.target.value)) setEmail(e.target.value)
        else setEmail('')
    }
    const handlePhone = (e) => {
        let value = e.target.value;
        value = value.replace(/^\d{3}-\d{3,4}-\d{4}$/ig, '')
        setPhone(value);
    }


    return (
        <div className='field-div'>
            <div className='input-form'>
                <input type="text" name='userId' id='uid' value={userId} onChange={handleUserId} className='form-box' 
                        maxLength={20} required></input>
                <label htmlFor='uid'>아이디 (영문, 숫자 최대 20자) </label>
            </div>
            <div className='input-form'>
                <input type="password" id="pw" name='password' value={password} onChange={handlePassword} className='form-box' 
                        autoComplete='off' maxLength={15} required></input>
                <label htmlFor='pw'>비밀번호 (영문, 숫자, 특수문자 포함 8-15자리)</label>
            </div>
            <div className='input-form'>
                <input type="password" id='pwConfirm' name='passwordConfirm' value={passwordConfirm} onChange={handlePasswordConfirm} className='form-box' 
                        autoComplete='off'required></input>
                <label htmlFor='pwConfirm'>비밀번호 확인</label>
            </div>
            <div className='input-form'>
                <input type="text" id='uName'name='userName' value={userName} onChange={handleUserName} className='form-box' 
                        required></input>
                <label htmlFor='uName'>이름</label>
            </div>
            <div className='input-form'>
                <input type="email" id='em' name='email' value={email} onChange={handleEmail} onBlur={checkEmail} className='form-box' 
                      required></input>
                <label htmlFor='em'>이메일</label>
            </div>
            <div className='input-form'>
                <input type="text" id='pnum' name='phone' value={phone} onChange={handlePhone} className='form-box' 
                        required></input>
                <label htmlFor='pnum'>휴대폰번호('-' 제외)</label>
            </div> 

            {/* 휴대폰 인증번호를 통한 회원가입 */}
            {/* <SignupPhoneCertification /> */}
        </div>
    );
};

export default SignUpField;