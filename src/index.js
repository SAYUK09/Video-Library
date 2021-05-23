import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { VideosProvider } from "./contexts/videoLibContext";
import {PlaylistProvider} from "./contexts/playlistContext"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <VideosProvider>
    <PlaylistProvider>  
      <App />
      </PlaylistProvider>   
    </VideosProvider>
  </StrictMode>,
  rootElement
);
