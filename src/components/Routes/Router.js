import { VideoListing } from "../../pages/Video-Listing/Video-Listing";
import { LikedVideos } from "../../pages/Liked-Videos/Liked-Videos";
import { Login } from "../../pages/Login/Login";
import { Playlist } from "../../pages/Playlist/Playlist";
import { Signup } from "../../pages/signup/signup";
import { VideoDetail } from "../../pages/Video-Details/Video-Details";
import { WatchLater } from "../../pages/Watch-Later/Watch-Later";

import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../PrivateRouter/PrivateRoutes";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<VideoListing />} />
      <PrivateRoute path="/playlists" element={<Playlist />} />
      <PrivateRoute path="/likedvideos" element={<LikedVideos />} />
      <PrivateRoute path="/watchlater" element={<WatchLater />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/videodetails/:id" element={<VideoDetail />} />
    </Routes>
  );
}
