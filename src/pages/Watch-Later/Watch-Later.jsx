import "./Watch-Later.css";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsDown } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { axiosRemoveFromWatchLater } from "../../utility/watchLater.utility";
import { useAuth } from "../../contexts/authContext";

export function WatchLater() {
  const { auth } = useAuth();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://Vid-Lib-API-Forked.sayuk.repl.co/watchlater",
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );
        const likedVideosArr = response.data;
        dispatch({ type: "SET_WATCH_LATER", payload: likedVideosArr });
      } catch (err) {
        console.log("Error!!!", err);
      }
    })();
  }, []);

  const { state, dispatch } = useVideos();

  return (
    <>
      <div className="watchLaterParent">
        <div className="watchLaterBody">
          {state.watchLater.map((vid) => {
            return (
              <div key={vid._id} className="horizCardParent">
                <div className="horizCardBody">
                  <Link
                    className="videoDetailRoute"
                    to={`/videodetails/${vid.videoURL}`}
                  >
                    <div className="HorizImgDiv">
                      <img src={vid.thumbnail} />
                    </div>
                  </Link>
                  <Link
                    className="videoDetailRoute"
                    to={`/videodetails/${vid.videoURL}`}
                  >
                    <div className="HorizCardDetails">
                      <div className="brandTitle">{vid.title}</div>
                    </div>
                  </Link>
                </div>
                <div className="horizCardFooter">
                  <button className="horizFooterBtn " onClick={() => {}}>
                    Play Video
                  </button>
                  <button
                    onClick={() => {
                      axiosRemoveFromWatchLater(vid, dispatch, auth);
                      // dispatch({
                      //   type: "REMOVE_FROM_WATCH_LATER",
                      //   payload: vid
                      // });
                    }}
                    className="horizFooterBtn secBtn"
                  >
                    <FaThumbsDown />
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
