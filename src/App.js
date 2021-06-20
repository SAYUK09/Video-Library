import "./styles.css";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useVideos } from "./contexts/videoLibContext";
import { VideoListing } from "./pages/Video-Listing/Video-Listing";
import { VideoDetail } from "./pages/Video-Details/Video-Details";
import { Playlist } from "./pages/Playlist/Playlist";
import { LikedVideos } from "./pages/Liked-Videos/Liked-Videos";
import { WatchLater } from "./pages/Watch-Later/Watch-Later";
import { Nav } from "./components/Nav/Nav";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Signup } from "./pages/signup/signup";
import { Login } from "./pages/Login/Login";
import { useToast } from "./contexts/toastContext";

export default function App() {
  const { state, dispatch } = useVideos();
  const { ToastContainer } = useToast();

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          "https://Vid-Lib-API-Forked.sayuk.repl.co/videos"
        );

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          Pag
          <Route path="/videodetails/:id" element={<VideoDetail />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
