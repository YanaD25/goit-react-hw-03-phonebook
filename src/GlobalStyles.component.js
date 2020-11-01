import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
  padding-bottom: 20px;
  background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
li {
    list-style-type: none;
}
`;

export default GlobalStyled;
