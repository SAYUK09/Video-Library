import axios from "axios";

export function ifAlreadyInWatchLater(state, vidObj, dispatch, auth, toast) {
  const isInWatchLater = state.watchLater.filter((item) => {
    return vidObj._id == item.videoId;
  });
  if (state.watchLater.length === 0) {
    console.log(isInWatchLater.length);
    axiosAddToWatchLater(vidObj, dispatch, auth, toast);
  } else {
    if (isInWatchLater.length === 1) {
      toast("Already Added", {
        type: "warning",
      });
    } else {
      axiosAddToWatchLater(vidObj, dispatch, auth, toast);
    }
  }
}

export function axiosAddToWatchLater(video, dispatch, auth, toast) {
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
            videoId: video._id,
          },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        dispatch({ type: "ADD_TO_WATCH_LATER", payload: resp.data });
        toast("Added to Watch Later", {
          type: "success",
        });
      } catch (err) {
        console.log(err);
      }
    })();
  } else {
    toast("Please Login", {
      type: "error",
    });
  }
}

export function axiosRemoveFromWatchLater(video, dispatch, auth, toast) {
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
        toast("Removed from Watch Later", {
          type: "success",
        });
      } catch (error) {
        console.log(error);
      }
    })();
  } else {
    toast("Please Login", {
      type: "error",
    });
  }
}
