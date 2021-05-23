import { usePlaylist } from "../../contexts/playlistContext";
import {
  addVideoToPlaylist,
  axiosAddNewPlaylist
} from "../../utility/playlist.utility";
import axios from "axios";
import { useEffect } from "react";

export function Modal({ newPlaylist, setNewPlaylist, video }) {
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

  return (
    <>
      <div className="modalParent">
        <input
          onChange={(e) => {
            setNewPlaylist(e.target.value);
          }}
          type="text"
        />

        <button
          onClick={() => {
            axiosAddNewPlaylist(newPlaylist, playlistDispatch);
          }}
        >
          SAVE
        </button>

        <div>
          {playlistState.playlist.map((item) => {
            return (
              <>
                <p>{item.name}</p>
                <button
                  onClick={() => {
                    addVideoToPlaylist(item, video, playlistDispatch);
                  }}
                >
                  Add
                </button>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
