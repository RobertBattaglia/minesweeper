import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  html {
    font-size: 62.5%;
  }
  body {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom right, #07BEB8, #C4FFF9);
  }
  @import url('https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap');
  h1 {
    font-family: 'Permanent Marker';
  }
`;

export default GlobalStyle;
