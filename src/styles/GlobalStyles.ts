import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *{
        outline: none;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    body {
        margin: 0;
        padding: 0;
        background: #141414;
        color: #fff;
        font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
        height: 100vh;
        width: 100vw
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`

export default GlobalStyles
