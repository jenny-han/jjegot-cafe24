import React, { useState } from 'react';

const SignupPhoneCertification = () => {

    const [phoneNm, setPhoneNm] = useState("")
    const [phoneConfirm, setPhoneConfirm] = useState("")

    const handlePhoneNm = (e) => {
        setPhoneNm(e.target.value);
    }
    const handlePhoneConfirm = (e) => {
        setPhoneConfirm(e.target.value);
    }


    return (
        <>
            <div className='input-form'>
                    <input type="text" id='phonenum' name='phone' value={phoneNm} onChange={handlePhoneNm} className='form-box' required></input>
                    <label htmlFor='phonenum'>휴대폰번호('-' 제외)</label>
                   
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
        </>
    );
};

export default SignupPhoneCertification;