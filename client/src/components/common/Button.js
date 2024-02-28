import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;

  margin-top: 2rem;

  cursor: pointer;
  padding: 0.25rem 1rem;

  outline: none;
  color: white;
  background: #1a56ce;
  &:hover {
    background: #1a56ce80;
  }

  ${(props) =>
    `${props.fullwidth}` &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.gray &&
    css`
      background: #fffff;
      border-color: #8e8e8e;
      &:hover {
        background: #eeeeee80;
      }
    `}
`;

const linkBtnstyle = css`
  background-color: #fff;
  color: #555;
  font-weight: normal;
  font-size: 1rem;
  pointer: cursor;

  &:hover {
    background-color: #fff;
    text-decoration: underline;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${linkBtnstyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
