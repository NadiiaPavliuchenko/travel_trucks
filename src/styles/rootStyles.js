import { createGlobalStyle } from "styled-components";

import InterRegular from "../assets/fonts/Inter-Regular.ttf";
import InterMedium from "../assets/fonts/Inter-Medium.ttf";
import InterSemibold from "../assets/fonts/Inter-Semibold.ttf";
import InterBold from "../assets/fonts/Inter-Bold.ttf";

export const RootStyles = createGlobalStyle`
    :root {
        --main: #101828;
        --text: #475467;
        --white: #fff;
        --inputs: #f7f7f7;
        --badges: #f2f4f7;
        --gray: #6c717b;
        --gray-light: #dadde1;
        --button: #e44848;
        --button-hover: #d84343;
        --rating: #ffc531;
    }
    @font-face {
        font-family: "Inter-Regular";
        font-weight: 400;
        font-style: normal;
        src: url(${InterRegular}) format("truetype");
    }
    @font-face {
        font-family: "Inter-Medium";
        font-weight: 500;
        font-style: normal;
        src: url(${InterMedium}) format("truetype");
    }
    @font-face {
        font-family: "Inter-Semibold";
        font-weight: 600;
        font-style: normal;
        src: url(${InterSemibold}) format("truetype");
    }
    @font-face {
        font-family: "Inter-Bold";
        font-weight: 700;
        font-style: normal;
        src: url(${InterBold}) format("truetype");
    }
    body {
        margin: 0;
        display: block;
        font-family: "Inter-Regular", sans-serif;
        font-weight: 400;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--white);
        color: var(--main);
    }
    ul,
    ol {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    input {
        background-color: transparent;
        border: none;
    }
    button {
        cursor: pointer;
    }
`;
