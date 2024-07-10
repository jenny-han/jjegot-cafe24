import styled from 'styled-components';
import logoWhite from '../../assets/jjegot_logo_w.png';

const FooterBlock = styled.div`
  width: 100%;
  background: #2a2a2a;
  position: relative;
  bottom: 0;
  padding: 20px;
`;
const FooterLogo = styled.img`
  width: 15%;
  max-width: 150px;
`;

const FooterTitle = styled.div`
  color: white;
  font-size: 0.8em;
  padding: 10px;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div>
        <FooterLogo src={logoWhite} alt="logo" />
        <FooterTitle>
          Copyright &copy; 2024 자재이곳 All rights reserved.
        </FooterTitle>
      </div>
    </FooterBlock>
  );
};

export default Footer;
