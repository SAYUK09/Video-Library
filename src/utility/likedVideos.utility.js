import axios from "axios";

export function axiosAddToLikedVideos(video, dispatch, auth) {
  (async function () {
    try {
      const resp = await axios.post(
        "https://Vid-Lib-API-Forked.sayuk.repl.co/likedvideos",
        {
          thumbnail: video.thumbnail,
          videoURL: video.videoURL,
          title: video.title,
          description: video.description,
          category: video.category,
          channel: video.channel,
        },
        {
          headers: {
            "auth-token": auth.token,
          },
        }
      );
      console.log(auth.token);

      dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: resp.data });
    } catch (err) {
      console.log(err);
    }
  })();
}

export function axiosRemoveFromLikedVideos(video, dispatch, auth) {
  (async function () {
    try {
      const response = await axios.delete(
        `https://Vid-Lib-API-Forked.sayuk.repl.co/likedvideos/${video._id}`,
        {
          headers: {
            "auth-token": auth.token,
          },
        }
      );

      dispatch({ type: "SET_LIKED_VIDEOS", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  })();
}
