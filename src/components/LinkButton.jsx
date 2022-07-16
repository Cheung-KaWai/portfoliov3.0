import React from "react";
import styled from "styled-components";

export default function LinkButton({ link, className, text }) {
  return (
    <Link href={link} className={className}>
      {text}
    </Link>
  );
}

const Link = styled.a`
  font-size: 1.6rem;
  width: fit-content;
  padding: 1rem 3rem;
  border-radius: 3px;
`;
