import "./Modal.css";
import { usePlaylist } from "../../contexts/playlistContext";
import {
  axiosAddVideoToPlaylist,
  axiosAddNewPlaylist,
} from "../../utility/playlist.utility";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-toastify";

export function Modal({ newPlaylist, setNewPlaylist, video, setShowModal }) {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { auth } = useAuth();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://Vid-Lib-API-Forked.sayuk.repl.co/playlist",
          {
            headers: {
              "auth-token": auth.token,
            },
          }
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
              axiosAddNewPlaylist(newPlaylist, playlistDispatch, auth, toast);
            }}
          >
            Create
          </button>
        </div>

        <div>
          {playlistState.playlist.map((item) => {
            return (
              <>
                <div key={item._id} className="playlistTitle">
                  <p>{item.name}</p>
                  <button
                    onClick={() => {
                      axiosAddVideoToPlaylist(
                        item,
                        video,
                        playlistDispatch,
                        auth,
                        toast
                      );
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
