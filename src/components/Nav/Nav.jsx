import "./Nav.css";
import {
  CgPlayListAdd,
  CgPlayButton,
  CgHeart,
  CgMediaPodcast,
} from "react-icons/cg";
import {
  BsFillClockFill,
  BsList,
  BsFillPersonFill,
  BsPlayFill,
} from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function Nav() {
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
            <BsFillPersonFill />
          </Link>
        </div>
      </nav>
    </div>
  );
}
