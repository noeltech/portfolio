import React from "react";
import styled from "styled-components";
import WriteUps from "./WriteUps";
import ScrollToTopOnMount from "../../utilities/ScrollTopOnMount";

const index = props => {
  console.log();

  return (
    <Container>
      <ScrollToTopOnMount />
      <SubContainer>
        <Title>{props.title}</Title>
        <Subtitle>{props.subtitle}</Subtitle>
        <ProjectImage src={props.img} />
        <FlexWrapper>
          {props.githubLink && (
            <Link href={props.githubLink} target="_blank">
              view code at github{" "}
            </Link>
          )}
          {props.siteLink && (
            <Link href={props.siteLink} target="_blank">
              visit live site
            </Link>
          )}
        </FlexWrapper>
        <WriteUps details={props.details} />
      </SubContainer>
    </Container>
  );
};

export default index;

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;

const SubContainer = styled.main`
  margin: 0 auto;
  max-width: 1024px;
  background-color: #fff;

  width: 100%;
  height: 100%;
  padding: 100px 12px;
`;
const Title = styled.h1`
  text-align: center;
  color: #39424e;
`;
const Link = styled.a`
  margin-top: 12px;
  font-size: 1rem;
  font-weight: 500px;
  color: #39424e;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 600px;
  margin-top: 8px;
  color: #39424e;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;
const ProjectImage = styled.img`
  margin-top: 50px;
  height: 500px;
  width: 100%;
  border: solid 1px grey;
`;

const TechStack = styled.section`
  flex: 1 0 200px;
  /* height: 100%; */
  justify-content: space-between;
  background-color: grey;
`;
