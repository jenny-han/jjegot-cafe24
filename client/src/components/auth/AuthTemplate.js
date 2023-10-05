import styled from 'styled-components';
import logo from '../../assets/jjegot-seller-logo.png';
import { Link } from 'react-router-dom'

// 회원가입, 로그인 페이지의 레이아웃을 담당하는 컴포넌트

const AuthTemplateBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left:0;
    bottom:0;
    top:0;
    right:0;

`

const WhiteBox = styled.div`
    .logo-area {
        display:block;
        padding-bottom:2rem;
        text-align: center;
    }
    .main-logo {
        width: -webkit-fill-available;
    }
    padding: 2rem;
    width:400px;
`

const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className='logo-area' >
                    <Link to="/">
                        <img src={logo} alt='logo' className='main-logo'></img>
                    </Link>
                </div>

            { children }

            </WhiteBox>
        </AuthTemplateBlock>
    );
}

export default AuthTemplate