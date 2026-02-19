import styled from 'styled-components';

export const FooterSection = styled.section`
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
`;

export const FooterContainer = styled.div`
  min-height: 200px;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  h2 {
    color: white;
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    color: white;
    font-size: 1.3rem;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const SocialItem = styled.div`
  height: 50px;
  width: 50px;
  margin: 0 5px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
    font-size: 2.5rem;
    transition: 0.3s ease all;
  }

  &:hover a {
    color: crimson;
    transform: scale(1.1);
  }
`;