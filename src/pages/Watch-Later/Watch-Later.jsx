import "./Watch-Later.css";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsDown, FaRegClock, FaBorderNone } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";

import { axiosRemoveFromWatchLater } from "../../utility/watchLater.utility";

export function WatchLater() {
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://vid-lib-backend.sayuk.repl.co/watchlater"
        );
        const likedVideosArr = response.data;
        dispatch({ type: "SET_WATCH_LATER", payload: likedVideosArr });
      } catch (err) {
        console.log("Error!!!", err);
      }
    })();
  }, []);

  const { state, dispatch } = useVideos();
  console.log(state.watchLater, "wwwt");
  return (
    <>
      <div className="watchLaterParent">
        <div className="watchLaterBody">
          {state.watchLater.map((vid) => {
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
                      axiosRemoveFromWatchLater(vid, dispatch);
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
