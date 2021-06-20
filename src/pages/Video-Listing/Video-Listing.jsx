import React, { useState } from "react";
import "./Video-Listing.css";
import { Link } from "react-router-dom";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsUp, FaRegClock, FaBorderNone } from "react-icons/fa";
import { CgPlayListAdd } from "react-icons/cg";
import { axiosAddToLikedVideos } from "../../utility/likedVideos.utility";
import { axiosAddToWatchLater } from "../../utility/watchLater.utility";
import { Modal } from "../../components/Modal/Modal";
import { usePlaylist } from "../../contexts/playlistContext";
import { useAuth } from "../../contexts/authContext";

export function VideoListing() {
  const { state, dispatch } = useVideos();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { auth } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState("");
  const [videoToAdd, setVideoToAdd] = useState({});

  return (
    <>
      <div className="vidListingParent">
        <div className="vidBody">
          {showModal && (
            <Modal
              newPlaylist={newPlaylist}
              setNewPlaylist={setNewPlaylist}
              video={videoToAdd}
              setShowModal={setShowModal}
            />
          )}
          {state.videos.map((vidObj) => {
            return (
              <div key={vidObj._id} className="vidCardBody">
                <Link
                  className="videoDetailRoute"
                  to={`/videodetails/${vidObj.videoURL}`}
                >
                  <div className="videoImgDiv">
                    <img className="thumbnail-image" src={vidObj.thumbnail} />
                  </div>
                </Link>
                <Link
                  className="videoDetailRoute"
                  to={`/videodetails/${vidObj.videoURL}`}
                >
                  <h4 className="video-title"> {vidObj.title}</h4>
                </Link>
                <b>
                  <small>{vidObj.channel}</small>
                </b>
                <small className="vid-category">{vidObj.category}</small>

                <div className="vidBtnDiv">
                  <button
                    className="like-button"
                    onClick={() => {
                      axiosAddToLikedVideos(vidObj, dispatch, auth);
                    }}
                  >
                    <FaThumbsUp className="like-icon" />
                  </button>

                  <button
                    className="like-button"
                    onClick={() => {
                      axiosAddToWatchLater(vidObj, dispatch, auth);
                    }}
                  >
                    <FaRegClock className="like-icon" />
                  </button>

                  <button
                    className="like-button"
                    onClick={() => {
                      setShowModal(!showModal);
                      setVideoToAdd(vidObj);
                    }}
                  >
                    <CgPlayListAdd className="like-icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
