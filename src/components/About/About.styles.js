import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ColRight = styled.div`
  width: 100%;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutDescription = styled.div`
  max-width: 900px;
  margin: 0 auto 50px;
  
  p {
    font-size: 1.6rem;
    line-height: 1.8;
    color: #34495e;
    margin-bottom: 20px;
    padding: 25px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
  }
  
  @media (max-width: 768px) {
    p {
      font-size: 1.4rem;
      padding: 20px;
    }
  }
`;

export const Skillset = styled.div`
  margin-top: 60px;
  
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const SkillsHeader = styled.div`
  background: linear-gradient(135deg, crimson 0%, #c0392b 100%);
  color: white;
  padding: 20px 30px;
  border-radius: 12px 12px 0 0;
  margin-bottom: 0;
  box-shadow: 0 4px 6px rgba(220, 20, 60, 0.2);
  
  h2 {
    font-size: 2.2rem;
    font-weight: 600;
    margin: 0;
    text-align: center;
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    padding: 15px 20px;
    
    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0;
  background: white;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  padding: 30px;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  transition: all 0.3s ease;
  background: white;
  
  &:hover {
    background: #f8f9fa;
    transform: scale(1.02);
    z-index: 1;
  }
  
  &:nth-child(3n) {
    border-right: none;
  }
  
  @media (max-width: 768px) {
    padding: 25px;
    border-right: none;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const SkillCategory = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 3px solid crimson;
  display: inline-block;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SkillItem = styled.li`
  font-size: 1.5rem;
  color: #555;
  padding: 10px 0;
  padding-left: 25px;
  position: relative;
  transition: all 0.2s ease;
  
  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: crimson;
    font-size: 1.8rem;
    font-weight: bold;
  }
  
  &:hover {
    color: crimson;
    padding-left: 30px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 8px 0;
    padding-left: 25px;
  }
`;

export const ResumeButton = styled.a`
  display: inline-block;
  margin: 40px auto 0;
  padding: 15px 40px;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, crimson 0%, #c0392b 100%);
  border: none;
  border-radius: 50px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 8px 15px rgba(220, 20, 60, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 20px rgba(220, 20, 60, 0.4);
    background: linear-gradient(135deg, #c0392b 0%, crimson 100%);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 12px 30px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ColLeft = styled.div`
  width: 250px;
  height: 360px;

  @media only screen and (min-width: 768px) {
    width: 600px;
    height: 400px;
    padding-left: 60px;
  }
`;

export const AboutImg = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border: 10px solid white;

  &::after {
    content: "";
    position: absolute;
    left: -33px;
    top: 19px;
    height: 98%;
    width: 98%;
    border: 7px solid crimson;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) {
    &::after {
      left: -45px;
      top: 34px;
      height: 98%;
      width: 98%;
      border: 10px solid crimson;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;