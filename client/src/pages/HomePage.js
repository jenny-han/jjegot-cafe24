import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../containers/common/HeaderContainer';
import ImageCover from '../components/common/ImageCover';

import coverImg from '../assets/homeCover.png';
import VerticalLine from '../components/common/VerticalLine';
import Footer from '../components/common/Footer';

const MainWrap = styled.div`
  height: auto;
`;

const ProcessBlock = styled.div`
  width: 100%;
  margin: 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContextTitle = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  margin: 30px 0 50px;
`;

const ContextArea = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.span`
  font-size: 0.9em;
  color: #555;
  font-weight: 500;
`;
const ProcessTitle = styled.div`
  font-size: 1.2em;
  margin: 5px;
  font-weight: 600;
`;

const StepBox = styled.div`
  width: 300px;
  margin: 30px;
  position: relative;
`;
const StepBlock = styled.div`
  background: #e3e9f5;
  border-radius: 10px;
  padding: 20px 10px;
`;
const StepTitle = styled.div`
  font-size: 1.2em;
  font-style: normal;
  margin: 10px;
  font-weight: 700;
`;
const StepDesc = styled.div`
  margin: 5p;
`;

const BottomBlock = styled.div`
  padding: 30px;
  text-align: left;
  background-color: #1a56ce;
  margin: 40px 0;
  margin-right: 10%;
  border-radius: 0 20px 20px 0;
  color: white;
  display: flex;
  justify-content: space-around;
`;

const BottomTitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`;

const BottomContents = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1em;
`;

const BottomButton = styled.div`
  width: 220px;
  max-width: 30%;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  color: #1a56ce;
  background-color: white;
  font-weight: bolder;
  font-size: 1.3em;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const HomePage = () => {
  return (
    <>
      <MainWrap>
        <HeaderContainer />
        <div>
          <ImageCover imgSrc={coverImg} imgAlt={'cover_image'} />
          <ProcessBlock style={{ background: '#F8F8F8' }}>
            <ContextTitle>자재이곳에서 상품 판매를 시작해보세요!</ContextTitle>
            <ContextArea>
              <div>
                <SubTitle>자재이곳이 처음이라면?</SubTitle>
                <br />
                <ProcessTitle>온라인에서 쉽고 빠른 입점 절차</ProcessTitle>
              </div>
              <StepBox>
                <StepBlock>
                  <StepTitle>서류준비</StepTitle>
                  <StepDesc>사업자등록증/통장사본 준비</StepDesc>
                </StepBlock>
                <VerticalLine />
                <StepBlock>
                  <StepTitle>입점신청</StepTitle>
                  <StepDesc>사업장정보/담당자명/취급품목 항목 입력</StepDesc>
                </StepBlock>
                <VerticalLine />
                <StepBlock>
                  <StepTitle>심사</StepTitle>
                  <StepDesc>평균 2-3일 내에 이메일로 승인여부 안내</StepDesc>
                </StepBlock>
              </StepBox>
            </ContextArea>
          </ProcessBlock>
          <BottomBlock>
            <BottomContents>
              <BottomTitle>온라인신청</BottomTitle>
              <p>
                언제 어디서나 <br />
                빠르게 시작할 수 있어요
              </p>
            </BottomContents>
            <BottomButton>입점신청</BottomButton>
          </BottomBlock>
        </div>
        <Footer />
      </MainWrap>
    </>
  );
};

export default HomePage;
