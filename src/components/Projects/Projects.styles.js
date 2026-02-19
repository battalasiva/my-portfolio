import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 50px 0;
`;

export const ProjectsContainer = styled.div`
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

export const AllProjects = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProjectItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 400px;
    margin: 40px auto;
    width: 90%;
    border-radius: 15px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

export const ProjectInfo = styled.div`
  padding: 30px;
  flex-basis: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: white;

  h1 {
    font-size: 4rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
    margin-top: 10px;
  }

  p {
    color: white;
    line-height: 1.6;
    margin-bottom: 10px;
  }
`;

export const ProjectHeader = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const ProjectDescription = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: 15px;
  overflow-y: auto;
  max-height: 150px;

  &.expanded {
    max-height: 200px;
  }

  @media only screen and (min-width: 768px) {
    max-height: 120px;

    &.expanded {
      max-height: 180px;
    }
  }
`;

export const ProjectFooter = styled.div`
  width: 100%;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const ReadMoreBtn = styled.button`
  background: none;
  border: 1px solid crimson;
  color: crimson;
  padding: 5px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: crimson;
    color: white;
  }
`;

export const Cta1 = styled.a`
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 25px;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  margin: 0 10px;

  &:hover {
    background-color: white;
    color: #29323c;
    transform: translateY(-2px);
  }

  @media only screen and (max-width: 768px) {
    padding: 8px 15px;
    font-size: 1.1rem;
    font-weight: 600;
    white-space: nowrap;
    margin: 5px;
    min-width: 100px;
  }
`;

export const ProjectImg = styled.div`
  flex-basis: 50%;
  height: 300px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    opacity: 0.7;
  }

  img {
    transition: 0.3s ease transform;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  ${ProjectItem}:hover & img {
    transform: scale(1.1);
  }

  @media only screen and (min-width: 768px) {
    height: 100%;
  }
`;