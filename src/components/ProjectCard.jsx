import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function ProjectCard({ src, title, children, aos }) {
  return (
    <ProjectCardContainer
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <CardImage src={src} />
      <CardTitle>{title}</CardTitle>
      <Description>{children}</Description>
    </ProjectCardContainer>
  );
}

const ProjectCardContainer = styled(motion.article)`
  width: 100%;
  height: auto;
  overflow: hidden;
  justify-self: center;
`;

const CardImage = styled.img`
  width: 100%;
  height: 40rem;
  object-fit: cover;

  @media (max-width: 700px) {
    height: 30rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 500;
  margin: 2rem 0 0.5rem 0;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;
