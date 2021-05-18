import "./Nav.css";
import {
  CgPlayListAdd,
  CgPlayButton,
  CgHeart,
  CgMediaPodcast
} from "react-icons/cg";
import {
  BsFillClockFill,
  BsList,
  BsMusicNoteList,
  BsPlayFill
} from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";

import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export function Nav() {
  return (
    <div>
      <nav className="nav1">
        <div className="logo">
          <img className="navLogo" src="" />
        </div>
        <input className="navSearchBar" placeholder="🔎Search something" />
        <div className="navIcons">
          <Link className="routeLink" to="/">
            <BsPlayFill />
          </Link>
          &nbsp;
          <Link className="routeLink" to="/playlists">
            <CgPlayListAdd />
          </Link>
          &nbsp;
          <Link className="routeLink" to="/">
            <BsFillClockFill />
          </Link>
          &nbsp;
        </div>
      </nav>
    </div>
  );
}
