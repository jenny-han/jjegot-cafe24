import styled from 'styled-components';

const ImageCoverBlock = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
`;

const ImageCover = ({ imgSrc, imgAlt }) => {
  return (
    <ImageCoverBlock>
      <Image src={imgSrc} alt={imgAlt} />
    </ImageCoverBlock>
  );
};

export default ImageCover;
