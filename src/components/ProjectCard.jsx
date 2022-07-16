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

export default function ProjectCard({ src, title, children, color }) {
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

      <Button color={color}>View Project</Button>
    </ProjectCardContainer>
  );
}

const ProjectCardContainer = styled(motion.article)`
  width: 100%;
  min-height: 57.5rem;
  overflow: hidden;
  justify-self: center;
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  transition: all 0.3s ease-out;
  padding: 1rem 3rem;
  margin-top: auto;
  position: relative;
  border-radius: 3px;
  width: fit-content;
  transition: all 0.3 ease-out;
  font-weight: 600;
  letter-spacing: 0.8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);

  &::after {
    content: "Coming Soon";
    display: block;
    width: fit-content;
    color: white;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(120%, 40%);
    opacity: 0;
    font-weight: 400;
    transition: all 0.3s ease-out;
  }

  &:hover {
    background-color: #dbe4ff;
    color: #5c7cfa;
    &::after {
      opacity: 1;
    }
  }
`;
