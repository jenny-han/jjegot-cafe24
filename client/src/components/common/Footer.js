import styled from 'styled-components';
import logoWhite from '../../assets/jjegot_logo_w.png';

const FooterBlock = styled.div`
  width: 100%;
  background: black;
  height: 100px;
  position: relative;
  transform: translateY(-100%);
`;
const FooterLogo = styled.img`
  width: 20%;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div>
        <FooterLogo src={logoWhite} alt="logo" />
      </div>
    </FooterBlock>
  );
};

export default Footer;
