import React from "react";
import Routes from "./router/routes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
