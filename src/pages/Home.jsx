import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useMediaQuery } from "react-responsive";
import LinkButton from "../components/LinkButton";
import { ReactComponent as Hero } from "../images/hero2.svg";
import ProjectCard from "../components/ProjectCard";
import Navigation from "../components/nav/Navigation";
import { Chip, Heart, Goals, Computer } from "../components/UI";
import Footer from "../components/Footer/Footer";
import { getProjects, getTags } from "../utils/data";

export default function Home() {
  const [projects, setProjects] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState(null);
  const [tags, setTags] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");

  useEffect(() => {
    async function getAllData() {
      const initialData = await getProjects();
      setProjects(initialData);
      setFilteredProjects(initialData);
      setTags(await getTags());
    }
    getAllData();
  }, []);

  const small = useMediaQuery({ query: "(max-width:700px" });

  const handleFilter = (e) => {
    const tag = e.target.value;
    setSelectedTag(tag);
    FilterProjects(tag);
  };

  const FilterProjects = (value) => {
    if (value === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(value))
      );
    }
  };

  return (
    <>
      <Navigation />
      <PageSection>
        <LandingContent small={small}>
          <Title small={small}>
            Hi, I am
            <br /> Ka Wai Cheung
          </Title>
          <SubTitle small={small}>
            <SubTitleItem>A passionate future front-end developer</SubTitleItem>
            <SubTitleItem>Coding my projects with React ecosystem</SubTitleItem>
            <SubTitleItem>
              I am also interested in 3D in the browser
            </SubTitleItem>
          </SubTitle>
          <LinkList>
            <Cta text="My Projects" link="#projects" />
            <Cta2 text="About Me" link="#about" />
          </LinkList>
          <HeroBanner small={small} />
        </LandingContent>
      </PageSection>
      <PageSection id="projects">
        <SectionContent>
          <SectionTitle>School Projects</SectionTitle>
          <SectionSubTitle>
            - List of projects I have made during my school career
          </SectionSubTitle>
          <FilterContainer>
            <FilterButton
              value="All"
              onClick={handleFilter}
              selected={selectedTag === "All"}
            >
              All
            </FilterButton>
            {tags &&
              tags.map((tag, key) => (
                <FilterButton
                  key={key}
                  value={tag.name}
                  onClick={handleFilter}
                  selected={selectedTag === tag.name}
                >
                  {tag.name}
                </FilterButton>
              ))}
          </FilterContainer>
          <ProjectList>
            {filteredProjects &&
              filteredProjects.map((project, key) => (
                <ProjectCard
                  src={project.image.url}
                  title={project.title}
                  key={key}
                  color={project.color}
                >
                  {project.description}
                </ProjectCard>
              ))}
          </ProjectList>
        </SectionContent>
      </PageSection>
      <PageSection id="about">
        <SectionContent>
          <SectionTitle>About Me</SectionTitle>
          <SectionSubTitle>
            - Student majoring in web & mobile development
          </SectionSubTitle>
          <Bio>
            My whole life I thought I would have a future career in economics. I
            studied economics during my secondary school and applied for
            business engineering at university. In my second year I had a course
            intro to java and I really liked it even though I failed the exam
            (blame it on the teacher lol). After my second year I decided to
            take a 180 degrees turn an apply for a programming course and now 3
            years later I'm in my last year and can call myself a web developer.
          </Bio>
          <Grid>
            <Card>
              <CardTitleContainer>
                <Chip />
                <CardTitle>Technologies</CardTitle>
              </CardTitleContainer>
              <List>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>React</ListItem>
                <ListItem>React Native (Expo)</ListItem>
                <ListItem>Next.js</ListItem>
              </List>
            </Card>
            <Card>
              <CardTitleContainer>
                <Goals />
                <CardTitle>Goals</CardTitle>
              </CardTitleContainer>
              <List>
                <ListItem>3D web with Three.js</ListItem>
                <ListItem>Blender</ListItem>
                <ListItem>Run half marathon</ListItem>
              </List>
            </Card>
            <Card>
              <CardTitleContainer>
                <Heart />
                <CardTitle>Hobbies</CardTitle>
              </CardTitleContainer>
              <List>
                <ListItem>Cycling</ListItem>
                <ListItem>Travelling</ListItem>
                <ListItem>Running</ListItem>
                <ListItem>Fitness</ListItem>
                <ListItem>Anime</ListItem>
              </List>
            </Card>
            <Card>
              <CardTitleContainer>
                <Computer />
                <CardTitle>Tools</CardTitle>
              </CardTitleContainer>
              <List>
                <ListItem>VS Code</ListItem>
                <ListItem>Figma</ListItem>
                <ListItem>Notion</ListItem>
              </List>
            </Card>
          </Grid>
        </SectionContent>
      </PageSection>
      <Footer />
    </>
  );
}

const PageSection = styled.section`
  min-height: 100vh;
  background-color: #151922;
  display: flex;
  justify-content: center;
`;

const LandingContent = styled(Layout)`
  padding-top: ${(props) => (props.small ? "10rem" : "20rem")};
  padding-bottom: ${(props) => (props.small ? "10rem" : "20rem")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.small ? "center" : undefined)};
  justify-content: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.small ? "3.2rem" : "4.8rem")};
  text-align: ${(props) => (props.small ? "center" : undefined)};
  font-weight: 600;
  line-height: 1.4;
`;

const SubTitle = styled.ul`
  color: rgba(255, 255, 255, 0.5);
  padding-left: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  margin: 3rem 0;
  line-height: 1.6;
  border: ${(props) => (props.small ? "none" : undefined)};
  text-align: ${(props) => (props.small ? "center" : undefined)};
`;

const SubTitleItem = styled.li`
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

const LinkList = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
`;

const Cta = styled(LinkButton)`
  background-color: #5c7cfa;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #4263eb;
  }
`;

const Cta2 = styled(LinkButton)`
  transition: all 0.3s ease-out;
  &:hover {
    color: #5c7cfa;
  }
`;

const HeroBanner = styled(Hero)`
  width: 50rem;
  height: auto;
  position: absolute;
  right: 5rem;
  transform: translateY(-5rem);
  display: ${(props) => (props.small ? "none" : undefined)};
`;

const SectionContent = styled(Layout)`
  margin-bottom: 10rem;
`;

const SectionTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 2.4rem;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  @media (max-width: 1000px) {
    gap: 2rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SectionSubTitle = styled.p`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.8rem;
  margin-bottom: 4rem;
`;

const Bio = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5rem;
  margin-top: 6rem;
`;

const Card = styled.div`
  width: 20rem;
  height: auto;
`;

const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  svg {
    width: 2rem;
  }
  color: #5c7cfa;
`;

const CardTitle = styled.h3`
  font-weight: 500;
  text-underline-offset: 5px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li``;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
`;

const FilterButton = styled.button`
  color: ${(props) =>
    props.selected ? "#364fc7" : "rgba(255, 255, 255, 0.5)"};
  padding: 1rem 3rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease-out;
  border-radius: 3px;
  background-color: ${(props) =>
    props.selected ? "#dbe4ff" : "rgba(255, 255, 255, 0.1)"};

  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;
