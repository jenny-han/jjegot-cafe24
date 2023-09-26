import React, { useEffect, useState } from 'react';
import SignUpInput from './SignInput';
import SignupPhoneCertification from './SignupPhoneCertification';
import { signupCheckId } from '../services/customer'


const SignUpField = () => {

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const [error, setError] = useState(false);

    // const [phoneConfirm, setPhoneConfirm] = useState("")

    const [submit, setSubmit] = useState(false)


    useEffect(() => {
        //비밀번호 확인
        ((password && passwordConfirm ) && password !== passwordConfirm) ? 
            setErrorMsg("비밀번호가 일치하지 않습니다.") : 
            setErrorMsg('')

        errorMsg !== "" ? setError(true) : setError(false);
   
   
    })

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
    const checkEmail = (e) => {
        let emailcheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/ig
        if (emailcheck.test(e.target.value)) setEmail(e.target.value)
        else setEmail('')
    }
    const handlePhone = (e) => {
        let value = e.target.value;
        value = value.replace(/[^0-9]/ig, '')
        setPhone(value);
    }

    //아이디 중복확인
    const checkId = () => {
        const cid = userId;
        if(cid === "") {
            alert("아이디를 입력해주세요!")
           return;
        }

        console.log( signupCheckId(cid));
        // console.log(check)
        // if (check === "no") {
        //     alert("사용중인 아이디입니다.");
        //     setUserId('')
        // }else {
        //     alert("사용가능한 아이디 입니다")
        //     // setUserId(cid)
        // }
    }

    return (
        <div className='field-div'>
            <SignUpInput type="text" id="uid" name='userId' value={userId} handleChange={handleUserId}
                labelTxt="아이디 (영문, 숫자 최대 20자)" max="20" isRequired={true} checkId={checkId} />
            <SignUpInput type="password" id="pw" name='password' value={password} handleChange={handlePassword}
                labelTxt="비밀번호 (영문, 숫자, 특수문자 포함 8-15자리)" max="15" auto="off" isRequired={true} />
            <SignUpInput type="password" id="pwC" name='passwordConfirm' value={passwordConfirm} handleChange={handlePasswordConfirm}
                labelTxt="비밀번호 확인" max="15" auto="off" isRequired={true} />
            { error && 
                <div className='error'> 
                <span className='error-txt'><br />{errorMsg}</span>
                </div>
             }

            <SignUpInput type="text" id="uName" name='userName' value={userName} handleChange={handleUserName}
                labelTxt="이름" max="" auto="off" isRequired={true} />
            <SignUpInput type="email" id="em" name='email' value={email} handleChange={handleEmail} handleBlur={checkEmail}
                labelTxt="이메일" max="" isRequired={true}/>
            <SignUpInput type="text" id="pnum" name='phone' value={phone} handleChange={handlePhone}
                labelTxt="휴대폰번호('-' 제외)" max="11" isRequired={true} />
            
           

            {/* 휴대폰 인증번호를 통한 회원가입 */}
            {/* <SignupPhoneCertification /> */}
        </div>
    );
};

export default SignUpField;