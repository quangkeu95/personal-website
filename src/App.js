import React, { Component, Fragment } from "react";
import HomePage from "./components/HomePage";
import Main from "./components/Main";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "\"Open Sans\", sans-serif;",
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HomePage />
        {/* <Main /> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
