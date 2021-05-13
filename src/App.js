import "./styles.css";
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

import { VideoListing } from "./pages/Video-Listing/Video-Listing";
import { VideoDetails } from "./pages/Video-Details/Video-Details";
import { Playlist } from "./pages/Playlist/Playlist";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<VideoListing />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/VideoDetails/:id" element={<VideoDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
