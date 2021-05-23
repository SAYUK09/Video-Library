import React from "react";
import { createContext, useContext, useReducer, useState } from "react";
import uuid from "react-uuid";
import { playlistReducer } from "../reducers/playlistReducer";

export const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlist: [{ id: uuid(), name: "Playlist1", videos: [] }]
  });

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}
