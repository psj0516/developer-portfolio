import { css } from '@emotion/react';
import { colorPalette } from './colorPalette';

export default css`
  ${colorPalette}
  :root {
    --dimmed-zindex: 10;
    --alert-zindex: 11;
  }
  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    scrollbar-width: thin; /* Firefox */
    scrollbar-color: #3c9d93 #011627; /* Firefox */
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: #011627;
  }

  body::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: #3c9d93;
    border-radius: 10px;
    border-left: 3px solid #1e2d3d;
    border-right: 2px solid #011627;
  }

  body::-webkit-scrollbar-button {
    display: none;
  }
`;
