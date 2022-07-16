import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export default function Layout({ children, className }) {
  const small = useMediaQuery({ query: "(max-width:700px" });

  return (
    <Container small={small} className={className}>
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 120rem;
  max-width: 100%;
  min-height: 100vh;
  padding: ${(props) => (props.small ? "2rem" : "5rem")};
`;
