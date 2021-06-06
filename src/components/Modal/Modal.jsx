import "./Modal.css";
import { usePlaylist } from "../../contexts/playlistContext";
import {
  axiosAddVideoToPlaylist,
  axiosAddNewPlaylist,
} from "../../utility/playlist.utility";
import axios from "axios";
import { useEffect } from "react";

export function Modal({ newPlaylist, setNewPlaylist, video, setShowModal }) {
  const { playlistState, playlistDispatch } = usePlaylist();
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://vid-lib-backend.sayuk.repl.co/playlist"
        );

        playlistDispatch({ type: "SET_PLAYLIST", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className="modalParent">
        <div className="closeModalDiv">
          <button
            className="closeModalBtn"
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="modalTitle">
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
            Create
          </button>
        </div>

        <div>
          {playlistState.playlist.map((item) => {
            return (
              <>
                <div className="playlistTitle">
                  <p>{item.name}</p>
                  <button
                    onClick={() => {
                      axiosAddVideoToPlaylist(item, video, playlistDispatch);
                    }}
                  >
                    Add
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
