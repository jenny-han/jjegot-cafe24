import styled from 'styled-components';

const VerticalLineBlock = styled.div`
  border-left: 2px solid #ccc;
  height: 30px;
  position: relative;
  left: 50%;
  margin-left: -3px;
  top: 0;
`;

const VerticalLine = () => {
  return <VerticalLineBlock></VerticalLineBlock>;
};

export default VerticalLine;
