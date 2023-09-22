import React, { useRef, useState } from 'react';
import SignUpField from './SignUpField';
import SignUpAgree from './SignUpAgree';
import { Link } from 'react-router-dom';

import axios from 'axios'

const SignUpForm = () => {
    const formRef = useRef(null);
    const [customer, setCustomer] = useState({})

    const handleSignup = (e) => {
        alert("회원가입 button")
        // console.dir(e.target.elements)
        axios.post(`${process.env.REACT_APP_SERVER}/db/customer/insert`, 
        getParam(e.target.elements)
        ).then((res) => {
            console.log(res);
            if(alert("회원가입이 완료되었습니다."))
                return <Link to='/login'  />

        }).catch((err) => {
            console.log(err);
            alert("회원가입 진행 중 오류가 발생하였습니다. 잠시 후에 다시 시도해주세요.");
        })
    }

    const getParam = (d) => {
       return new URLSearchParams({
            userId : d.userId.value,
            password : d.password.value,
            userName : d.userName.value,
            email : d.email.value,
            phone : d.phone.value,
            agreeMarketing : d.agreeMarketing.checked ? 1 : 0
        })
    }

    return (
        <div className='form-div' onSubmit={handleSignup}>
            <form ref={formRef} >

                <SignUpField />
                <SignUpAgree />

                <div className='signup-div'>
                    <button type="submit" className='signup-btn' >가입하기</button>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;