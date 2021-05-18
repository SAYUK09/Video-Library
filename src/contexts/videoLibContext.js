import React from "react";
import { createContext, useContext, useReducer, useState } from "react";

import { vidLibReducer } from "../reducers/videoLibReducer";

export const VideosContext = createContext();

export function VideosProvider({ children }) {
  const [state, dispatch] = useReducer(vidLibReducer, {
    likedVideos: [],
    watchLater: [],
    videos: []
  });

  return (
    <VideosContext.Provider value={{ state, dispatch }}>
      {children}
    </VideosContext.Provider>
  );
}

export function useVideos() {
  return useContext(VideosContext);
}
