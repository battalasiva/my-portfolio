import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 100px 0;
`;

export const ContactContainer = styled.div`
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
    padding: 100px 0;
    align-items: center;
    justify-content: center;
    min-width: 20vh;
  }
`;

export const ContactItems = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
  }
`;

export const ContactItem = styled.div`
  width: 80%;
  padding: 30px;
  text-align: center;
  border-radius: 10px;
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 0px 18px 0 #0000002c;
  transition: 0.3s ease box-shadow;

  &:hover {
    box-shadow: 0px 0px 5px 0 #0000002c;
  }

  @media only screen and (min-width: 768px) {
    width: 30%;
    margin: 0;
    flex-direction: row;
  }
`;

export const Icon = styled.div`
  width: 70px;
  margin: 0 auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: crimson;

  @media only screen and (min-width: 768px) {
    height: 100px;
    width: 100px;
    font-size: 5rem;
  }
`;

export const ContactInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 5px;
  }

  h2 {
    font-size: 1.3rem;
    line-height: 2rem;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px) {
    width: 100%;
    text-align: left;
    padding-left: 20px;
  }
`;