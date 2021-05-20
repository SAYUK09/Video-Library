import React from "react";
import "./Video-Listing.css";
import { Link } from "react-router-dom";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsUp, FaRegClock, FaBorderNone } from "react-icons/fa";

import { axiosAddToLikedVideos } from "../../utility/likedVideos.utility";
import { axiosAddToWatchLater } from "../../utility/watchLater.utility";

export function VideoListing() {
  const { state, dispatch } = useVideos();

  return (
    <>
      <div className="vidListingParent">
        <div className="vidBody">
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
                      axiosAddToLikedVideos(vidObj, dispatch);
                      // dispatch({
                      //   type: "ADD_TO_LIKED_VIDEOS",
                      //   payload: vidObj
                      // });
                    }}
                  >
                    <FaThumbsUp className="like-icon" />
                  </button>

                  <button
                    className="like-button"
                    onClick={() => {
                      axiosAddToWatchLater(vidObj, dispatch);
                      // dispatch({
                      //   type: "ADD_TO_WATCH_LATER",
                      //   payload: vidObj
                      // });
                    }}
                  >
                    <FaRegClock className="like-icon" />
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
