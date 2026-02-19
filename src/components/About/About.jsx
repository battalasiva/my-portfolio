import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPortfolio, clearSuccess } from "../../redux/slices/portfolioSlice";
import { FaEdit, FaPlus } from "react-icons/fa";
import { 
  AboutSection, 
  AboutContainer, 
  ColRight, 
  AboutTitle,
  AboutDescription,
  Skillset, 
  SkillsHeader,
  SkillsGrid,
  SkillCard,
  SkillCategory,
  SkillList,
  SkillItem,
  ResumeButton,
  ButtonWrapper
} from "./About.styles";
import { SectionTitle } from "../../styles/GlobalStyles";
import Loader from "../common/Loader";
import ErrorDisplay from "../common/ErrorDisplay";
import Modal from "../common/Modal";
import Toast from "../common/Toast";
import PortfolioForm from "./PortfolioForm";
import { IconButton } from "../common/Button.styles";

const About = () => {
  const dispatch = useDispatch();
  const { data: portfolio, loading, error, success } = useSelector((state) => state.portfolio);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (success) {
      setShowToast(true);
      setIsModalOpen(false);
      dispatch(fetchPortfolio());
      dispatch(clearSuccess());
    }
  }, [success, dispatch]);

  if (loading && !portfolio) {
    return (
      <AboutSection id="about">
        <Loader minHeight="400px" />
      </AboutSection>
    );
  }

  if (error && !portfolio) {
    return (
      <AboutSection id="about">
        <ErrorDisplay 
          message={error} 
          onRetry={() => dispatch(fetchPortfolio())} 
          minHeight="400px"
        />
      </AboutSection>
    );
  }

  if (!portfolio) {
    return (
      <AboutSection id="about">
        <AboutContainer>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
            <SectionTitle>About <span>me</span></SectionTitle>
            <IconButton onClick={() => setIsModalOpen(true)} title="Add Portfolio"><FaPlus /></IconButton>
          </div>
          <p style={{ textAlign: 'center', fontSize: '1.6rem', marginTop: '20px' }}>No portfolio data available.</p>
        </AboutContainer>
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Create Portfolio"
        >
          <PortfolioForm onClose={() => setIsModalOpen(false)} existingData={null} />
        </Modal>
      </AboutSection>
    );
  }

  return (
    <AboutSection id="about">
      <AboutContainer className="about">
        <ColRight className="col-right">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
            <SectionTitle className="section-title">About <span>me</span></SectionTitle>
            <IconButton onClick={() => setIsModalOpen(true)} title="Edit Portfolio"><FaEdit /></IconButton>
          </div>
          
          <AboutTitle>{portfolio.title}</AboutTitle>
          
          <AboutDescription className="about-description">
            <p>{portfolio.bio_one}</p>
            <p>{portfolio.bio_two}</p>
            <p>{portfolio.bio_three}</p>
          </AboutDescription>

          <Skillset className="skillset">
            <SkillsHeader>
              <h2>Key Skills & Technologies</h2>
            </SkillsHeader>
            <SkillsGrid>
              {portfolio.skills?.map((skill, index) => (
                <SkillCard key={index}>
                  <SkillCategory>{skill.category}</SkillCategory>
                  <SkillList>
                    {skill.technologies.map((tech, techIndex) => (
                      <SkillItem key={techIndex}>{tech}</SkillItem>
                    ))}
                  </SkillList>
                </SkillCard>
              ))}
            </SkillsGrid>
          </Skillset>

          <ButtonWrapper>
            <ResumeButton 
              href={portfolio.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download Resume
            </ResumeButton>
          </ButtonWrapper>
        </ColRight>
      </AboutContainer>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Update Portfolio"
      >
        <PortfolioForm onClose={() => setIsModalOpen(false)} existingData={portfolio} />
      </Modal>

      {showToast && (
        <Toast 
          message="Portfolio saved successfully!" 
          type="success" 
          onClose={() => setShowToast(false)} 
        />
      )}
    </AboutSection>
  );
};

export default About;
