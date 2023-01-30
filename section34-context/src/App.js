import React, { Component } from 'react';
import Navbar from "./Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import styles from "./styles/NavBarStyles";

const defaultTheme = createTheme()

class App extends Component {
  render() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
    </ThemeProvider>

  );
  }
}

export default App;
