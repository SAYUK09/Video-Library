import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { VideosProvider } from "./contexts/videoLibContext";
import { PlaylistProvider } from "./contexts/playlistContext";
import { ToastProvider } from "./contexts/toastContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ToastProvider>
      <VideosProvider>
        <PlaylistProvider>
          <App />
        </PlaylistProvider>
      </VideosProvider>
    </ToastProvider>
  </StrictMode>,
  rootElement
);
