import styled, { css } from 'styled-components';

const StyledButton = styled.button`
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
    props.fullwidth &&
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

const Button = (props) => <StyledButton {...props} />;

export default Button;
