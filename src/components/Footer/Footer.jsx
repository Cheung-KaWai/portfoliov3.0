import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <List>
        <ListItem>Made by Ka Wai Cheung & Build with React</ListItem>
        <ListItem>
          <a
            href="https://github.com/Cheung-KaWai"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://linkedin.com/in/ka-wai-cheung-0849ba223"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://www.instagram.com/kawaicheung2/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </ListItem>
      </List>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  height: 15rem;
  width: 100%;
  background-color: #151922;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 32rem;
`;

const ListItem = styled.li`
  font-size: 1.4rem;
  a {
    font-size: 1.4rem;
    transition: all 0.3s ease-out;
    &:hover {
      color: #5c7cfa;
    }
  }
`;
