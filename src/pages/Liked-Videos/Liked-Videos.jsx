import "./Liked-Videos.css";
import { useVideos } from "../../contexts/videoLibContext";
import { FaThumbsDown, FaRegClock, FaBorderNone } from "react-icons/fa";
export function LikedVideos() {
  const { state, dispatch } = useVideos();

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
                  {/* <button className="horizFooterBtn secBtn" onClick={() => {}}>
                    
                  </button> */}
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_LIKED_VIDEOS",
                        payload: vid
                      });
                    }}
                    className="horizFooterBtn"
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
