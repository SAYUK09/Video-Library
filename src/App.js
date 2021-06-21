import "./styles.css";
import { useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import { useAuth } from "./contexts/authContext";

export default function App() {
  const { state, dispatch } = useVideos();
  const { ToastContainer } = useToast();
  const { auth } = useAuth();

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

  function PrivateRoute({ path, ...props }) {
    console.log(path, props, "llllllll");
    return auth ? (
      <Route {...props} path={path} />
    ) : (
      <Navigate state={{ from: path }} replace to="/login" />
    );
  }

  return (
    <div className="App">
      <Router>
        <Nav />
        <Sidebar />

        <Routes>
          <Route path="/" element={<VideoListing />} />
          <PrivateRoute path="/playlists" element={<Playlist />} />
          <PrivateRoute path="/likedvideos" element={<LikedVideos />} />
          <PrivateRoute path="/watchlater" element={<WatchLater />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
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
