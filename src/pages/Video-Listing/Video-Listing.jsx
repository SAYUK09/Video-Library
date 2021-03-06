import React, { useState } from "react";
import "./Video-Listing.css";
import { Link } from "react-router-dom";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsUp, FaRegClock, FaBorderNone } from "react-icons/fa";
import { CgPlayListAdd } from "react-icons/cg";
import { ifAlreadyInLikedVideos } from "../../utility/likedVideos.utility";
import {
  axiosAddToWatchLater,
  ifAlreadyInWatchLater,
} from "../../utility/watchLater.utility";
import { Modal } from "../../components/Modal/Modal";
import { usePlaylist } from "../../contexts/playlistContext";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

export function VideoListing() {
  const { state, dispatch } = useVideos();
  const { auth } = useAuth();
  const [displayLoader, setDisplayLoader] = useState(true);
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
          {state.videos &&
            state.videos.map((vidObj) => {
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
                        ifAlreadyInLikedVideos(
                          state,
                          vidObj,
                          dispatch,
                          auth,
                          toast
                        );
                      }}
                    >
                      <FaThumbsUp className="like-icon" />
                    </button>

                    <button
                      className="like-button"
                      onClick={() => {
                        ifAlreadyInWatchLater(
                          state,
                          vidObj,
                          dispatch,
                          auth,
                          toast
                        );
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

          {!state.videos.length && (
            <Loader type="TailSpin" color="#3b82f6" height={80} width={80} />
          )}
        </div>
      </div>
    </>
  );
}
