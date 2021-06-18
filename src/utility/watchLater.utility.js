import axios from "axios";

export function axiosAddToWatchLater(video, dispatch) {
  (async function () {
    try {
      const resp = await axios.post(
        "https://vid-lib-backend.sayuk.repl.co/watchlater",
        {
          thumbnail: video.thumbnail,
          videoURL: video.videoURL,
          title: video.title,
          description: video.description,
          category: video.category,
          channel: video.channel
        }
      );

      dispatch({ type: "ADD_TO_WATCH_LATER", payload: resp.data });
    } catch (err) {
      console.log(err);
    }
  })();
}

export function axiosRemoveFromWatchLater(video, dispatch) {
  (async function () {
    try {
      const response = await axios.delete(
        `https://vid-lib-backend.sayuk.repl.co/watchlater/${video._id}`
      );

      dispatch({ type: "SET_WATCH_LATER", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  })();
}
