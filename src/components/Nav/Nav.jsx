import "./Nav.css";
import React from "react";
import { CgPlayListAdd } from "react-icons/cg";
import { BsFillClockFill, BsFillPersonFill, BsPlayFill } from "react-icons/bs";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export function Nav() {
  const { auth } = useAuth();

  return (
    <div>
      <nav className="nav1">
        <Link className="navRouteLink" to="/">
          <div className="appName">BroadPod</div>
        </Link>
        <div className="logo">
          <img className="navLogo" src="" />
        </div>
        <input className="navSearchBar" placeholder="🔎Search something" />
        <div className="navIcons">
          <Link className="navRouteLink" to="/">
            <BsPlayFill />
          </Link>

          <Link className="navRouteLink" to="/playlists">
            <CgPlayListAdd />
          </Link>

          <Link className="navRouteLink" to="/watchlater">
            <BsFillClockFill />
          </Link>

          <Link className="navRouteLink" to="/login">
            <div className="userDiv">
              <BsFillPersonFill />
              <div className="userDetails">
                {auth ? <p>{auth.user.name}</p> : <p>Login</p>}
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}
