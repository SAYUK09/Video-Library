import "./styles.css";
import { useEffect } from "react";
import axios from "axios";
import { Router } from "./components/Routes/Router";
import { Nav } from "./components/Nav/Nav";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useToast } from "./contexts/toastContext";
import { useAuth } from "./contexts/authContext";
import { useVideos } from "./contexts/videoLibContext";

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

  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Router />

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
