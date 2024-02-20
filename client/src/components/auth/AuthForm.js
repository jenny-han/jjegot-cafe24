import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

// 회원가입 또는 로그인 폼을 보여줍니다.

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    font-size: 25pt;
    margin-bottom: 3rem;
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
  position: relative;
  top: -2rem;
  right: -8rem;
  cursor: pointer;
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  // text-align: right;
  a {
    color: #555;
    text-decoration: underline;
    &:hover {
      color: #1a56ce;
    }
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
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
  const togglePasswordConfirm = () => {
    if (passwordConfirmType === 'password') {
      setPasswordConfirmType('text');
      return;
    }
    setPasswordConfirmType('password');
  };

  console.log(text);
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="userEmail"
          name="userEmail"
          placeholder="이메일"
          onChange={onChange}
          value={form.userEmail}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type={passwordType}
          onChange={onChange}
          value={form.password}
        />
        <ViewPassword onClick={togglePassword}>
          {passwordType === 'password' ? (
            <i className="bi pw-hidden"></i>
          ) : (
            <i className="bi pw-view"></i>
          )}
        </ViewPassword>

        {type === 'register' && (
          <>
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type={passwordConfirmType}
              onChange={onChange}
              value={form.passwordConfirm}
            />
            <ViewPassword onClick={togglePasswordConfirm}>
              {passwordConfirmType === 'password' ? (
                <i className="bi pw-hidden"></i>
              ) : (
                <i className="bi pw-view"></i>
              )}
            </ViewPassword>
          </>
        )}

        <ButtonWithMarginTop fullwidth="true">
          {type === 'login' ? text : '가입하기'}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
