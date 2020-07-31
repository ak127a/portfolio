import React from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import HomePage from "./components/HomePage/HomePage";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
