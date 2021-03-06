import "./Playlist.css";
import { usePlaylist } from "../../contexts/playlistContext";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  axiosDeleteVideoFromPlaylist,
  axiosRemovePlaylist,
} from "../../utility/playlist.utility";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-toastify";
import emptySvg from "../../assests/empty.svg";

export function Playlist() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const [playlistVideos, setPlaylistVideos] = useState();
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
      <div className="plalistParent">
        <div className="playlistBody">
          {!playlistState.playlist.length && (
            <div className="emptySvgDiv">
              <img src={emptySvg} />
              <h2>No Saved Playlists</h2>
              <Link className="emptySvgLink" to="/">
                Watch Videos 📺
              </Link>
            </div>
          )}
          <div className="playlistCard">
            {playlistState.playlist.map((item) => {
              return (
                <>
                  <div className="playlistLister">
                    <h3
                      onClick={() => {
                        setPlaylistVideos(item);
                      }}
                    >
                      {item.name}
                    </h3>
                    <button
                      onClick={() => {
                        axiosRemovePlaylist(
                          item,
                          playlistDispatch,
                          auth,
                          toast
                        );
                      }}
                    >
                      X
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          <div className="playlistVideos">
            {playlistVideos &&
              playlistVideos.videos.map((vid) => {
                return (
                  <>
                    <div className="videoCard">
                      <Link
                        className="videoRouterLink"
                        to={`/videodetails/${vid.videoURL}`}
                      >
                        <div className="videoMainCard">
                          <div className="videoImgDiv">
                            <img className="video-image" src={vid.thumbnail} />
                          </div>
                          <h5>{vid.title}</h5>
                        </div>
                      </Link>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
