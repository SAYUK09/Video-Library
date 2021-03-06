import "./Liked-Videos.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsDown, FaRegClock, FaBorderNone } from "react-icons/fa";
import { axiosRemoveFromLikedVideos } from "../../utility/likedVideos.utility";
import { useAuth } from "../../contexts/authContext";
import { toast } from "react-toastify";
import emptySvg from "../../assests/empty.svg";

export function LikedVideos() {
  const { state, dispatch } = useVideos();
  const { auth } = useAuth();

  console.log(auth);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://Vid-Lib-API-Forked.sayuk.repl.co/likedvideos",
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );
        const likedVideosArr = response.data;

        dispatch({ type: "SET_LIKED_VIDEOS", payload: likedVideosArr });
      } catch (err) {
        console.log("Error!!!", err);
      }
    })();
  }, []);

  return (
    <>
      <div className="likedVideosParent">
        <div className="likedVideosBody">
          {!state.likedVideos.length && (
            <div className="emptySvgDiv">
              <img src={emptySvg} />
              <h2>Nothing in Liked Videos</h2>
              <Link className="emptySvgLink" to="/">
                Watch Videos 📺
              </Link>
            </div>
          )}

          {state.likedVideos.map((vid) => {
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
                      axiosRemoveFromLikedVideos(vid, dispatch, auth, toast);
                      // dispatch({
                      //   type: "REMOVE_FROM_LIKED_VIDEOS",
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
