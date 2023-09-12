import React, { useState } from 'react';
import '../styles/SignUp.css'
import Timer from '../utils/timer';

const SignUpField = () => {

    const [userId, setUserId] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneConfirm, setPhoneConfirm] = useState("")
    const [agreeAll, setAgreeAll] = useState(false)
    const [agreeFourteen, setAgreeFourteen] = useState(false)
    const [agreeService, setAgreeService] = useState(false)
    const [agreePayment, setAgreePayment] = useState(false)
    const [agreePersonal, setAgreePersonal] = useState(false)
    const [agreeMarketing, setAgreeMarketing] = useState(false)

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
    const handlePhoneConfirm = (e) => {
        setPhoneConfirm(e.target.value);
    }

    const handleAgreeAll = (e) => {
        setAgreeAll(e.target.value)
        setAgreeFourteen(e.target.value)
        setAgreeService(e.target.value)
        setAgreePayment(e.target.value)
        setAgreePersonal(e.target.value)
        setAgreeMarketing(e.target.value)        

    }

    const handleAgreeFourTeen  = (e) => {
        setAgreeFourteen(e.target.value)
    }
    const handleAgreeService  = (e) => {
        setAgreeService(e.target.value)
    }



    const handleSignup = (e) => {
        alert("회원가입 button")
        e.preventDefault();
        if (userName === '' || email === '' || password === '') {
            setError(true);
        } else {
            alert("회원가입 button")
            setError(false);
        }
    }




    return (
        <div className='form-div'>
            <form>
                <div className='input-form'>
                    <input type="text" name='userId' id='uid' value={userId} onChange={handleUserId} className='form-box' maxLength={20} required></input>
                    <label htmlFor='uid'>아이디 (영문, 숫자 최대 20자) </label>

                </div>
                <div className='input-form'>
                    <input type="password" id="pw" name='password' value={password} onChange={handlePassword} className='form-box' maxLength={15} required></input>
                    <label htmlFor='pw'>비밀번호 (영문, 숫자, 특수문자 포함 8-15자리)</label>
                </div>
                <div className='input-form'>
                    <input type="password" id='pwConfirm' name='passwordConfirm' value={passwordConfirm} onChange={handlePasswordConfirm} className='form-box' required></input>
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
                   
                   {/* 인증을 진행하지 않은경우 */}
                    <div className='btn-cert'>인증 요청</div>
                    {/* <div className='btn-recert'>재요청</div> */}

                </div> 

                {/* 인증 요청 한경우 노출 */}
                <div className='input-form'>
                    <input type="text" id='renum' name='phoneConfirm' value={phoneConfirm} onChange={handlePhoneConfirm} className='form-box' maxLength={6} required></input>
                    <label htmlFor='renum'>인증번호</label>

                    {/* <Timer /> */}
                    <div className='btn-confirm'>확인</div>
                    {/* <div className='btn-recert'>재요청</div> */}
                </div>

                <div className='agree-form'>
                    <div>
                        <input type="checkbox" id='allagree' name='agreeAll' value={agreeAll} onChange={handleAgreeAll} className='form-box' required></input>
                        <label htmlFor='allagree' className='allagree-label'>전체동의</label>
                    </div>
                    <p>
                        • 전체 동의는 필수 및 선택 항목에 대한 동의를 포함합니다.<br></br>
                        • 선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.
                    </p>
                    {/* <div className='agree-div'>
                        <div>
                            <input type="checkbox" id='agree14' name='agreeFourteen' value={agreeFourteen} onChange={handleAgreeFourTeen} className='form-box' required></input>
                            <label htmlFor='agree14'>[필수] 만 14세 이상입니다</label>
                        </div>
                        <div>
                            <input type="checkbox" id='agreeserv' name='agreeService' value={agreeService} onChange={handleAgreeService} className='form-box' required></input>
                            <label htmlFor='agreeserv'>[필수] 자재이곳 서비스 이용약관 - 사업자용</label>
                        </div>
                    </div> */}


                </div>
               
                <div className='signup-div'>
                    <button type="button" className='signup-btn' onClick={handleSignup} >가입하기</button>
                </div>
            </form>
            
        </div>
    );
};

export default SignUpField;