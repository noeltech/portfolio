import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <Container pointer={props.id}>
      <StyledLink to={`/projects/${props.id}`} pointer={props.id}>
        <Icon>
          <FontAwesomeIcon icon={props.icon} size="4x" />
        </Icon>
        <SubContainer>
          <Title>{props.title}</Title>
          <Description>{props.shortDescription}</Description>
          {/* <StyledLink to={props.link}>Read More ></StyledLink> */}
          {/* <Link to={props.link}>
          <StyledLink>Read More ></StyledLink>
        </Link> */}
        </SubContainer>
      </StyledLink>
    </Container>
  );
};

export default Card;

const Container = styled.li`
  height: 160px;
  width: 100%;
  border-bottom: 1px solid #f7f7f7;

  :hover {
    color: green;
    cursor: ${props => (props.pointer === "true" ? "default" : "pointer")};
  }
`;

const SubContainer = styled.div`
  margin-left: 2rem;
  color: inherit;
`;

const Icon = styled.div`
  opacity: 0.5;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  font-size: 0.8rem;
  line-height: calc(0.8rem x 1.5);
  width: 100%;
  color: inherit;
  text-decoration: none;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  pointer-events: ${props => (props.pointer === "true" ? "none" : "auto")};
  cursor: ${props => (props.pointer === "true" ? "default" : "pointer")};
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #39424e;
`;
const Description = styled.p`
  margin-top: 0.3rem;
  font-size: 16px;
  line-height: 24px;
  width: 100%;

  /* color: #192735; */
  color: #192735;
`;
