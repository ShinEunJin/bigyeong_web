import { createGlobalStyle } from "styled-components";

import Router from "@/routes/Router";
import reset from "@/styles/reset-style";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
