import "./Playlist.css";
import { usePlaylist } from "../../contexts/playlistContext";
import axios from "axios";
import { useEffect } from "react";
import { axiosRemovePlaylist } from "../../utility/playlist.utility";

export function Playlist() {
  const { playlistState, playlistDispatch } = usePlaylist();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://vid-lib-backend.sayuk.repl.co/playlist"
        );
        console.log(response.data);
        playlistDispatch({ type: "SET_PLAYLIST", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(playlistState);

  return (
    <>
      <div className="plalistParent">
        <div className="playlistBody">
          {playlistState.playlist.map((item) => {
            return (
              <>
                <div className="playlistCard">
                  <h1>{item.name}</h1>
                  <button
                    onClick={() => {
                      axiosRemovePlaylist(item, playlistDispatch);
                    }}
                  >
                    REMOVE
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
