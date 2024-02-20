// eslint-disable-next-line
import React, { useRef, useState } from 'react';
import SignUpField from './SignUpField';
import SignUpAgree from './SignUpAgree';
import { signup } from '../services/customer';

const SignUpForm = () => {
  const formRef = useRef(null);

  const handleSignup = (e) => {
    // alert("회원가입 button")
    signup(e.target.elements);
  };

  return (
    <div className="form-div" onSubmit={handleSignup}>
      <form ref={formRef}>
        <SignUpField />
        <SignUpAgree />

        <div className="signup-div">
          <button type="submit" className="signup-btn">
            가입하기
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
