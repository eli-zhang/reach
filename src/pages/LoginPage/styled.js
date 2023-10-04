import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: url(${process.env.PUBLIC_URL + '/beach.png'}) no-repeat center center fixed; 
    background-size: cover;
`;

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;