import React, { useEffect, useState } from 'react';

const SignUpAgree = () => {
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


    return (
        <div className='agree-form'>
            <div>
                <input type="checkbox" id='allagree' name='agreeAll' value={agreeAll} onChange={handleAgreeAll} className='form-box' required></input>
                <label htmlFor='allagree' className='allagree-label'>전체동의</label>
            </div>
            <p>
                • 전체 동의는 필수 및 선택 항목에 대한 동의를 포함합니다.<br></br>
                • 선택 항목에 동의하지 않아도 서비스 이용이 가능합니다.
            </p>
            <div className='agree-div'>
                <div className='agree-list'>
                    <input type="checkbox" id='agree14' name='agreeFourteen' value={agreeFourteen} onChange={handleAgreeFourTeen} className='form-box' required></input>
                    <label htmlFor='agree14'>[필수] 만 14세 이상입니다</label>
                    <a href=''></a>
                </div>
                <div className='agree-list'>
                    <input type="checkbox" id='agreeserv' name='agreeService' value={agreeService} onChange={handleAgreeService} className='form-box' required></input>
                    <label htmlFor='agreeserv'>[필수] 자재이곳 서비스 이용약관 - 사업자용</label>
                </div>
            </div>


        </div>
    );
};

export default SignUpAgree;