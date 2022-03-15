import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
  }
  html,
  body,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  div {
      margin: 0;
      padding: 0;
  }
  
  body {
      font-family: 'Lucida Grande';
      background: ${({ theme }) => theme.colors.background_color};
  }
  
  a {
      text-decoration: none;
  }
`;

export default GlobalStyles;
