import React, { useEffect, useState } from 'react';
import SignupAgreeBox from './SignupAgreeBox';

const SignUpAgree = () => {

    useEffect = () => {
        
    }
    const [checklist, setChecklist] = useState([])
    const [agreeAll, setAgreeAll] = useState(false)
    const [agreeFourteen, setAgreeFourteen] = useState(false)
    const [agreeService, setAgreeService] = useState(false)
    const [agreePayment, setAgreePayment] = useState(false)
    const [agreePersonal, setAgreePersonal] = useState(false)
    const [agreeMarketing, setAgreeMarketing] = useState(false)


    const handleAgreeAll = (e) => {
        setAgreeAll(e.target.value)
    }

    const handleAgreeFourTeen  = (e) => {
        setAgreeFourteen(e.target.value)
    }
    const handleAgreeService  = (e) => {
        setAgreeService(e.target.value)
    }
    const handleAgreePayment = (e) => {
        setAgreePayment(e.target.value)
    }
    const handleAgreePersonal = (e) => {
        setAgreePersonal(e.target.value)
    }
    const handleAgreeMarketing = (e) => {
        setAgreeMarketing(e.target.value)
    }


    return (
        <div className='agree-form'>
            <div>
                <input type="checkbox" id='allagree' name='agreeAll' value={agreeAll} onChange={handleAgreeAll}></input>
                <label htmlFor='allagree' className='allagree-label'>전체동의</label>
            </div>
            <p>
                • 전체 동의는 필수 및 선택 항목에 대한 동의를 포함합니다.<br></br>
                • 선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.
            </p>
            <div className='agree-div'>
                <SignupAgreeBox id="agree14" name="agreeFourteen" value={agreeFourteen} onChange={handleAgreeFourTeen} text="[필수] 만 14세 이상입니다" />
                <SignupAgreeBox id="agreeservice" name="agreeService" value={agreeService} onChange = {handleAgreeService} text="[필수] 자재이곳 서비스 이용약관 - 사업자용" />
                <SignupAgreeBox id="agreepay" name="agreePayment" value={agreePayment} onChange = {handleAgreePayment} text="[필수] 전자금융거래 이용 약관" />
                <SignupAgreeBox id="agreepersonal" name="agreePersonal" value={agreePersonal} onChange = {handleAgreePersonal} text="[필수] 개인정보 수집 및 이용 동의" />
                <SignupAgreeBox id="agreemak" name="agreeMarketing" value={agreeMarketing} onChange = {handleAgreeMarketing} text="[선택] 광고 및 이벤트 목적의 개인정보 수집 및 이용 동의" />

            </div>

        </div>
    );
};

export default SignUpAgree;