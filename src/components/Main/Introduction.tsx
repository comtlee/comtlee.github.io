import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IGatsbyImageData } from "gatsby-plugin-image";
import ProfileImage from "components/Main/ProfileImage";

type IntroductionProps = {
  profileImage: IGatsbyImageData;
};

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #b5d692 0%, #b5d692 100%);
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 768px;
  height: 300px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage,
}) {
  return (
    <Background>
      <Wrapper>
        <ProfileImage profileImage={profileImage} />

        <div>
          <Title>Frontend Developer Comt</Title>
        </div>
      </Wrapper>
    </Background>
  );
};

export default Introduction;
