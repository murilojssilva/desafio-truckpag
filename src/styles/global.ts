import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #B12228;
        --yellow: #F3CC64;
        --blue: #393E8F;
        --pink: #EFBEB7;
        --dark-blue: #12194A;

        --blue-light: #6933FF;
		
		--text-title: #363F5F;
		--text-body: #969CB3;

        --shape: #FFFFFF;
		--input-background: #e7e9ee;
		--input-border: #d7d7d7;

    }
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
		-webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
        transform: filter 0.2s;
		&:hover{
			filter:brightness(0.9);
		}
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
