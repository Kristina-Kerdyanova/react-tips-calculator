import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

button {
    font-family: Arial, Helvetica, sans-serif;

    border: 0;
    background: 0;
    outline: none;
    cursor: pointer;
}

input {
    border: none;
}

`;
export { GlobalStyle };
