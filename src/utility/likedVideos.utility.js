import axios from "axios";

export function axiosAddToLikedVideos(video, dispatch) {
  (async function () {
    try {
      const resp = await axios.post(
        "https://vid-lib-backend.sayuk.repl.co/likedvideos",
        {
          thumbnail: video.thumbnail,
          videoURL: video.videoURL,
          title: video.title,
          description: video.description,
          category: video.category,
          channel: video.channel
        }
      );

      dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: resp.data });
    } catch (err) {
      console.log(err);
    }
  })();
}

export function axiosRemoveFromLikedVideos(video, dispatch) {
  (async function () {
    try {
      const response = await axios.delete(
        `https://vid-lib-backend.sayuk.repl.co/likedvideos/${video._id}`
      );

      dispatch({ type: "SET_LIKED_VIDEOS", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  })();
}
