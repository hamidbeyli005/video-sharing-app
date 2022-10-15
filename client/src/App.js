import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
  padding-right: 2px;
  background: ${({ theme }) => theme.bg};


`;
const Main = styled.div`
  flex: 5;

  overflow-y: auto;
  height: 100vh;
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #909090;
    border-radius: 10px;
  }
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
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
            <h1>loading...</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
