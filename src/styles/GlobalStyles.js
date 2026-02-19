import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  p {
    color: black;
    font-size: 1.4rem;
    margin-top: 5px;
    line-height: 2.5rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
  }

  section {
    scroll-margin-top: 8vh;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  color: black;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  display: inline-flex;
  align-items: center;
  gap: 15px;

  span {
    color: crimson;
  }
`;