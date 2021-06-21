import axios from "axios";

export function axiosAddToWatchLater(video, dispatch, auth) {
  if (auth) {
    (async function () {
      try {
        const resp = await axios.post(
          "https://Vid-Lib-API-Forked.sayuk.repl.co/watchlater",
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

        dispatch({ type: "ADD_TO_WATCH_LATER", payload: resp.data });
      } catch (err) {
        console.log(err);
      }
    })();
  } else {
    console.log("loggin");
  }
}

export function axiosRemoveFromWatchLater(video, dispatch, auth) {
  if (auth) {
    (async function () {
      try {
        const response = await axios.delete(
          `https://Vid-Lib-API-Forked.sayuk.repl.co/watchlater/${video._id}`,
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        dispatch({ type: "SET_WATCH_LATER", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    })();
  } else {
    console.log("loogin");
  }
}
