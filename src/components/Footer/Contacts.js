import React from "react";
import styled from "styled-components";

const Contacts = () => {
  return (
    <Container>
      <Contact>
        <ContactLink href="mailto:noelbajande@gmail.com">
          noelbajande@gmail.com
        </ContactLink>
      </Contact>
      <Contact>
        <ContactLink href="https://github.com/noeltech" target="_blank">
          github/noeltech
        </ContactLink>
      </Contact>
      <Contact>
        <ContactLink
          href="https://www.linkedin.com/in/noelbajande/"
          target="_blank"
        >
          linkedin/noelbajande
        </ContactLink>
      </Contact>
    </Container>
  );
};

export default Contacts;

const Container = styled.ul`
  list-style: none;
`;

const Contact = styled.li`
  color: #39424e;
`;

const ContactLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #738f93;
  text-decoration: none;
  :hover {
    color: #39424e;
  }
`;
