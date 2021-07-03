import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-size: 62.5%; /* Base do REM */
  /* Media query de acordo com necessidade */
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}
body {
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  position: absolute;

  #root {
    min-height: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 5rem);

  }
}

h4, h5, h6, strong {
  font-weight: 500;
}

h1 {
  font-weight: bold;
  font-size: 3rem;
}

h2 {
  font-weight: bold;
  font-size: 2.2rem;
}

h3 {
  font-weight: bold;
  font-size: 1.9rem;
}

p, span, div, input, button {
  font-size: 1.4rem;
}
label {
  font-size: 1.1rem;
  width: 100%;
  white-space: nowrap;
  font-weight: 500;
}
.spinnerContainer p {
  font-size: 2.4rem;
}

button  {
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  -webkit-tap-highlight-color: transparent;
}
`;

export default GlobalStyle;
