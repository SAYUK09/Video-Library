import axios from "axios";
export const baseURl = "https://Vid-Lib-API-Forked.sayuk.repl.co";

export function ifAlreadyInLikedVideos(state, vidObj, dispatch, auth, toast) {
  const isInLikedVideos = state.likedVideos.filter((item) => {
    return vidObj._id == item.videoId;
  });
  if (state.likedVideos.length === 0) {
    console.log(isInLikedVideos.length);
    axiosAddToLikedVideos(vidObj, dispatch, auth, toast);
  } else {
    if (isInLikedVideos.length === 1) {
      toast("Already Added", {
        type: "warning",
      });
    } else {
      axiosAddToLikedVideos(vidObj, dispatch, auth, toast);
    }
  }
}

export function axiosAddToLikedVideos(video, dispatch, auth, toast) {
  if (auth) {
    (async function () {
      try {
        const resp = await axios.post(
          `${baseURl}/likedvideos`,
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
        dispatch({ type: "ADD_TO_LIKED_VIDEOS", payload: resp.data });
        toast("Added to Liked Videos", {
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

export function axiosRemoveFromLikedVideos(video, dispatch, auth, toast) {
  if (auth) {
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
        toast("Removed from Liked Videos", {
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
