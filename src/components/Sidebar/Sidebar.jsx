import "./Sidebar.css";
import { CgPlayListAdd } from "react-icons/cg";
import { BsFillClockFill } from "react-icons/bs";
import { FaThumbsUp } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <div className="sidebarParent">
        <aside className="sidebarBody">
          <Link className="routeLink" to="/likedvideos">
            <div className="sidebarCategory">
              <FaThumbsUp />
              <h5>Liked Videos</h5>
            </div>
          </Link>

          <Link className="routeLink" to="/watchlater">
            <div className="sidebarCategory">
              <BsFillClockFill />
              <h5>Watch Later</h5>
            </div>
          </Link>

          <Link className="routeLink" to="/playlists">
            <div className="sidebarCategory">
              <CgPlayListAdd />
              <h5>Playlists</h5>
            </div>
          </Link>
        </aside>
      </div>
    </>
  );
}
