import styled from 'styled-components'

const StyledButton = styled.button`
    border:none;
    border-radius : 30px;
    font-size: 1rem;
    font-weight: bold;

    cursor:pointer;
    padding: 0.5rem 1rem;

    outline:none;
    color:white;
    background: #1A56CE;
`;

const Button = props => <StyledButton {...props} />;

export default Button;
