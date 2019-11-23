import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyles from "./utils/global";

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles></GlobalStyles>
    </ThemeProvider>
  </Fragment>,
  document.getElementById("root")
);
