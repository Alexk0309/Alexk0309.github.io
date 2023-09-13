import styled from "styled-components";
import { Paragraph, Title } from "../../components/typography/fonts";
import SkillIcon from "../../components/SkillIcon";

import codingImg from "../../../assets/images/coding.png";
import frontendImg from "../../../assets/images/frontend.png";
import backendImg from "../../../assets/images/backend.png";
import { BACKEND, FRONTEND, LANGUAGES } from "../../../constants/skills";

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsTitleContainer>
        <SkillsTitle>My Skills</SkillsTitle>
      </SkillsTitleContainer>

      <SkillsToolContainer>
        <SkillsToolWrapper>
          <SkillsSection>
            <SkillIcon img={codingImg} />
            <SkillsSectionTitle>Languages</SkillsSectionTitle>
            <SkillsList>
              {LANGUAGES.map((skill: string) => {
                return <SkillsText>{skill}</SkillsText>;
              })}
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <SkillIcon img={frontendImg} />
            <SkillsSectionTitle>Front End</SkillsSectionTitle>
            <SkillsList>
              {FRONTEND.map((skill: string) => {
                return <SkillsText>{skill}</SkillsText>;
              })}
            </SkillsList>
          </SkillsSection>
          <SkillsSection>
            <SkillIcon img={backendImg} />
            <SkillsSectionTitle>Back End</SkillsSectionTitle>
            <SkillsList>
              {BACKEND.map((skill: string) => {
                return <SkillsText>{skill}</SkillsText>;
              })}
            </SkillsList>
          </SkillsSection>
        </SkillsToolWrapper>
      </SkillsToolContainer>
    </SkillsContainer>
  );
};

export default Skills;

const SkillsContainer = styled.div`
  height: 900px;
  padding-top: 3%;
  background-color: #111010;
`;

const SkillsTitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SkillsTitle = styled(Title)`
  font-size: 100px;
`;

const SkillsSection = styled.div`
  display: flex;
  width: 100%;
  height: 70%;
  flex-direction: column;
  align-items: center;
`;

const SkillsToolContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const SkillsToolWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 60%;
  align-items: center;
  background-color: #000000;
  border-radius: 20px;
`;

const SkillsSectionTitle = styled(Paragraph)`
  font-weight: bold;
`;

const SkillsList = styled.ul``;

const SkillsText = styled.li`
  font-size: 25px;
`;
