import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "App";
import { theme } from "styles/theme";
import { GlobalStyle } from "styles/GlobalStyle";
import rootReducer from "reducers";

const store = configureStore({
  reducer: rootReducer
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  rootElement
);
