import React from "react";
import styled from "styled-components";

export default function Hamburger({ hamburger, cross }) {
  return (
    <>
      <HamburgerContainer ref={hamburger}>
        <HamburgerLine small />
        <HamburgerLine />
        <HamburgerLine small />
      </HamburgerContainer>
      <CrossContainer ref={cross}>
        <CrossLine />
        <CrossLine other />
      </CrossContainer>
    </>
  );
}

const HamburgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  top: 3.5rem;
  right: 3.5rem;
  align-items: center;
  cursor: pointer;
`;

const HamburgerLine = styled.span`
  width: ${(props) => (props.small ? "1.5rem" : "2rem")};
  height: 0.3rem;
  background-color: #ced4da;
  border-radius: 10px;
`;

const CrossContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: fixed;
  right: 6rem;
  top: 4.4rem;
  align-items: center;
  background-color: red;
  opacity: 0;
  cursor: pointer;
`;

const CrossLine = styled.span`
  width: 3rem;
  height: 0.3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: ${(props) => (props.other ? "rotate(45deg)" : "rotate(-45deg)")};
  background-color: #ced4da;
  border-radius: 10px;
`;
