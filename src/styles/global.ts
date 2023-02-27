import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}

body {
    background: ${(props) => props.theme["gray-600"]};
    color: ${(props) => props.theme["gray-100"]};
}

:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
}

body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`;
