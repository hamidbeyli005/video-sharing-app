import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 5;
  background: ${({theme})=>theme.bg};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk</h1>
            <h1>sdfcsdjndsk </h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
