import "./Watch-Later.css";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsDown, FaRegClock, FaBorderNone } from "react-icons/fa";
import {
  BsFillClockFill,
  BsList,
  BsMusicNoteList,
  BsPlayFill
} from "react-icons/bs";

export function WatchLater() {
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
                    {/* <p className="prdDescrip">shaka lala boom boom</p> */}
                    {/* <div className="horizCardBtnDiv">
                      <button className="HorizQtyBtn" onClick={() => {}}>
                        +
                      </button>
                      <span className="amt"> {} </span>
                      <button className="HorizQtyBtn subBtn" onClick={() => {}}>
                        -
                      </button>
                    </div> */}
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
                        type: "REMOVE_FROM_WATCH_LATER",
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
