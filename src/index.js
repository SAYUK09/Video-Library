import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { VideosProvider } from "./contexts/videoLibContext";
import { PlaylistProvider } from "./contexts/playlistContext";
import { ToastProvider } from "./contexts/toastContext";
import { AuthProvider } from "./contexts/authContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ToastProvider>
          <VideosProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </VideosProvider>
        </ToastProvider>
      </AuthProvider>
    </Router>
  </StrictMode>,
  rootElement
);
