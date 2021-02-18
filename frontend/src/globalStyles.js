import { createGlobalStyle } from 'styled-components';
import background from './images/background.png';

const GlobalStyle = createGlobalStyle`

  /* VARIABLES */

  :root {
    --bg-img-width: 200px;
    --bg-img-height: 200px;
    --bg-animation-duration: 20s;
  }

  /* ANIMATIONS */

  @-webkit-keyframes bg-scrolling {
    100% {
      background-position: var(--bg-img-width) var(--bg-img-height);
    }
  }

  @-moz-keyframes bg-scrolling {
    100% {
      background-position: var(--bg-img-width) var(--bg-img-height);
    }
  }

  @-o-keyframes bg-scrolling {
    100% {
      background-position: var(--bg-img-width) var(--bg-img-height);
    }
  }

  @keyframes bg-scrolling {
    100% {
      background-position: var(--bg-img-width) var(--bg-img-height);
    }
  }

  /* MAIN STYLES */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Staatliches', sans-serif;
  }

  /* html {
    height: -webkit-fill-available;
  } */

  body {
    background-color: rgb(255,255,255);
    background: url(${background}) repeat 0 0;
    -webkit-animation: bg-scrolling var(--bg-animation-duration) infinite;
    -moz-animation: bg-scrolling var(--bg-animation-duration) infinite;
    -o-animation: bg-scrolling var(--bg-animation-duration) infinite;
    animation: bg-scrolling var(--bg-animation-duration) infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear
  }

  button {
    padding: 8px 12px;
    background-color: rgb(46, 41, 37);
    color: rgb(255,255,255);
    border: none;
    border-radius: 5px;
    font-size: 20px;
    line-height: 1;
    letter-spacing: 1px;
    font-family: 'Bangers', sans-serif;
    cursor: pointer;
  }

  input {
    border: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: rgb(46, 41, 37);
  }
  
`;

export default GlobalStyle;