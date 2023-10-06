import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

// 회원가입 또는 로그인 폼을 보여줍니다.

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    margin-bottom: 1rem;
  }
`;
// styled input
const StyledInput = styled.input`
  font-size: 1rem;
  border: 1px solid #8e8e8e;
  border-radius: 30px;
  width: 100%;
  height: 45px;
  outline: none;
  padding-left: 1.5rem;
  &:focus {
    color: #1a56ce;
    border: 1px solid #1a56ce;
  }
  & + & {
    margin-top: 0.8rem;
  }
`;

const ViewPassword = styled.span`
  position:relative;
  top:-2rem;
  right:-8rem;
  cursor:pointer;
`

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
    login:'로그인',
    register:'회원가입'
};

const AuthForm = ({type}) => {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordConfirmType, setPasswordConfirmType] = useState('password');
  const text = textMap[type];

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="userEmail"
          name="userEmail"
          placeholder="이메일"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type={passwordType}
        />
        <ViewPassword onClick={togglePassword}>
          {passwordType === 'password' ? (
            <i className="bi pw-hidden"></i>
          ) : (
            <i className="bi pw-view"></i>
          )}
        </ViewPassword>

        {type === 'register' && (
            <StyledInput autoComplete='new-password' name = "passwordConfirm" placeholder='비밀번호 확인' type={passwordConfirmType}/>
        )}

        <ButtonWithMarginTop fullWidth>로그인</ButtonWithMarginTop>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
