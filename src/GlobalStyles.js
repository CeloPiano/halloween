import { createGlobalStyle } from "styled-components";
import { COLORS } from "./constants/colors";


export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        text-transform: none;
    }

    html, body, #root {

        width: 100vw;
        height: 100vh;
        
        background-color: ${COLORS.bluebackground};

        font-family: 'Anton', sans-serif;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    *, button, input {
        font-family: 'Anton', sans-serif;
        border: 0;
        outline: 0;
    }
`