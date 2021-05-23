import "./Playlist.css";
import { usePlaylist } from "../../contexts/playlistContext";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  axiosDeleteVideoFromPlaylist,
  axiosRemovePlaylist
} from "../../utility/playlist.utility";
import { Link } from "react-router-dom";

export function Playlist() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const [playlistVideos, setPlaylistVideos] = useState();

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
      <div className="plalistParent">
        <div className="playlistBody">
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
                        axiosRemovePlaylist(item, playlistDispatch);
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
                console.log(vid, "cid");

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
                      {/* <button
                        onClick={() => {
                          console.log(
                            playlistVideos._id,
                            vid._id,
                            "lLlALALALA"
                          );
                          axiosDeleteVideoFromPlaylist(playlistVideos, vid);
                        }}
                      >
                        Remove
                      </button> */}
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
