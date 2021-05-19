import "./Liked-Videos.css";
import { useEffect } from "react";
import axios from "axios";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsDown, FaRegClock, FaBorderNone } from "react-icons/fa";
import { axiosAddToLikedVideos } from "../../utility/likedVideos.utility";

export function LikedVideos() {
  const { state, dispatch } = useVideos();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://vid-lib-backend.sayuk.repl.co/likedvideos"
        );
        const likedVideosArr = response.data;
        dispatch({ type: "SET_LIKED_VIDEOS", payload: likedVideosArr });
      } catch (err) {
        console.log("Error!!!", err);
      }
    })();
  }, [state.likedVideos]);

  return (
    <>
      <div className="likedVideosParent">
        <div className="likedVideosBody">
          {state.likedVideos.map((vid) => {
            return (
              <div key={vid._id} className="horizCardParent">
                <div className="horizCardBody">
                  <div className="HorizImgDiv">
                    <img src={vid.thumbnail} />
                  </div>
                  <div className="HorizCardDetails">
                    <div className="brandTitle">{vid.title}</div>

                    <div className="prdPrice">
                      <b> </b>
                    </div>
                  </div>
                </div>
                <div className="horizCardFooter">
                  <button className="horizFooterBtn " onClick={() => {}}>
                    Play Video
                  </button>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_LIKED_VIDEOS",
                        payload: vid
                      });
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
