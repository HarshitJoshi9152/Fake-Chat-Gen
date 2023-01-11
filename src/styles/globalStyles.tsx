import { createGlobalStyle } from "styled-components";
import { theme } from "./theme"; // remove this include line, error is interesting ! defaultTheme object

export const GlobalStyles = createGlobalStyle`

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme: Theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 1rem;
  color: ${({ theme: Theme }) => theme.colors.text};
  background-color: ${({ theme: Theme }) => theme.colors.background};
  line-height: 1;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}









/*  */


body {
  background-color: #f5f5f5;
}
`;
