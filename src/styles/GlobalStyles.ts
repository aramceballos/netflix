import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    *{
        outline: none;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        background: #141414;
        color: #fff;
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
        height: 100vh;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`

export default GlobalStyles
