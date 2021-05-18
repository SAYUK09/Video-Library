import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { VideosProvider } from "./contexts/videoLibContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <VideosProvider>
      <App />
    </VideosProvider>
  </StrictMode>,
  rootElement
);
