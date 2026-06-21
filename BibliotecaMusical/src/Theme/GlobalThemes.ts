import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    :root{
        font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400; 
        color-scheme: light dark;
        color: ${({theme}) => theme.colors.text};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
    }
    body{
        margin: 0;
        background-color: ${({theme}) => theme.colors.background};
    }

`;
export default GlobalStyles;