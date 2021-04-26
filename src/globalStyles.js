import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        width: 100vw;
        min-height: 100vh;
        font-family: 'Roboto';
        overflow-x: hidden;
    }
    button {
        outline: none;
        cursor: pointer;
    }
`;
 
export default GlobalStyle