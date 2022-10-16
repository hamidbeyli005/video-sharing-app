import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import { Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  return <MainLayout />;
}

export default App;
