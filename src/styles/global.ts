import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #d41C26;
    --black: #000000;
    --blackLighter: #9E9E9E;
    --grayLight: #F5F5F5;
    --grayMedium: #e5e5e5;
    --white: #FFFFFF;
    --frontEnd: #6BD1FF;
    --backEnd: #00C86F;
    --grayDark: #141414;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: var(--grayDark)
  }
  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }
  @media (max-width: 800px) {
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }
  a {
    color: inherit;
  }

  #root {
    min-height: calc(100vh - var(--bodyPaddingTop));
    display: flex;
    flex-direction: column;
  }
`;
