import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utils/Theme";
import Menu from "./Menu";
import Navbar from "./Navbar";

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

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Outlet />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;
