import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
    font-size: 62.5%;
    }

    html{
        font-size: 100%;
    }
    body{
        background-color: #000;
        color: #fff;
    }
`;

export default GlobalStyle
