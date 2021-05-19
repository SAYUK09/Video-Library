import "./styles.css";
import { useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
  useLocation
} from "react-router-dom";

import { useVideos } from "./contexts/videoLibContext";

import { VideoListing } from "./pages/Video-Listing/Video-Listing";
import { VideoDetails } from "./pages/Video-Details/Video-Details";
import { Playlist } from "./pages/Playlist/Playlist";
import { LikedVideos } from "./pages/Liked-Videos/Liked-Videos";
import { WatchLater } from "./pages/Watch-Later/Watch-Later";

import { Nav } from "./components/Nav/Nav";
import { Sidebar } from "./components/Sidebar/Sidebar";

export default function App() {
  const { state, dispatch } = useVideos();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://Vid-Lib-Backend.sayuk.repl.co/videos"
        );

        console.log(response.data);
        const videos = response.data;
        dispatch({ type: "SET_VIDEOS", payload: videos });
      } catch (err) {
        console.log("Error!!!", err);
      }
    })();
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Sidebar />

        <Routes>
          <Route path="/" element={<VideoListing />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/likedvideos" element={<LikedVideos />} />
          <Route path="/watchlater" element={<WatchLater />} />

          <Route path="/VideoDetails/:id" element={<VideoDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
