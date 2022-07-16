import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Hamburger from "./Hamburger";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);

  const menuRef = useRef();
  const menuLinks = useRef();
  const hamburger = useRef();
  const cross = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .to(hamburger.current, {
        opacity: 0,
        duration: 0.2,
      })
      .to(menuRef.current, {
        width: "200vw",
        height: "200vw",
        top: 0,
        right: 0,
        borderRadius: 0,
        duration: 0.3,
        ease: "slow(0.7, 0.7, false)",
      })
      .to(menuRef.current, {
        backgroundColor: "#151922",
        duration: 0.2,
      })
      .to(cross.current, {
        opacity: 1,
        duration: 0.2,
      })
      .to(menuLinks.current, {
        visibility: "visible",
      });
  }, []);

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  }, [toggle]);

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <NavContainer ref={menuRef} onClick={toggleMenu}>
        <Hamburger hamburger={hamburger} cross={cross} />
        <NavContent ref={menuLinks}>
          <NavItem>
            <a href="/#">Home</a>
          </NavItem>
          <NavItem>
            <a href="/#projects">Projects</a>
          </NavItem>
          <NavItem>
            <a href="/#about">About</a>
          </NavItem>
        </NavContent>
      </NavContainer>
    </>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 5rem;
  height: 5rem;
  display: block;
  border-radius: 50%;

  background-color: #5c7cfa;
  transform-origin: center;
  overflow: hidden;
  z-index: 5;
  box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.3);
`;

const NavContent = styled.ul`
  list-style: none;
  padding: 10rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  left: 5rem;
  visibility: hidden;
`;

const NavItem = styled.li`
  padding: 1rem 0;
  a {
    font-size: 2.4rem;
    transition: all 0.3s ease-out;
    &:hover {
      color: #5c7cfa;
    }
  }
`;
