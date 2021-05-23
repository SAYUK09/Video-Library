import "./Playlist.css";
import { usePlaylist } from "../../contexts/playlistContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { axiosRemovePlaylist } from "../../utility/playlist.utility";
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
                  <div className="playlistListing">
                    <h1
                      onClick={() => {
                        setPlaylistVideos(item);
                      }}
                    >
                      {item.name}
                    </h1>
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
          <div className="playlistVideos">
            {playlistVideos &&
              playlistVideos.videos.map((vid) => {
                console.log(vid);

                return (
                  <>
                    <div className="videoCard">
                      <Link to={`/videodetails/${vid.video.videoURL}`}>
                        <div className="videoMainCard">
                          <div className="videoImgDiv">
                            <img
                              className="video-image"
                              src={vid.video.thumbnail}
                            />
                          </div>
                        </div>
                      </Link>
                      <h5>{vid.video.title}</h5>
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
