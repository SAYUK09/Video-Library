import axios from "axios";

export const axiosAddNewPlaylist = (
  newPlaylist,
  playlistDispatch,
  auth,
  toast
) => {
  if (auth) {
    (async function () {
      console.log(newPlaylist);
      try {
        const response = await axios.post(
          "https://Vid-Lib-API-Forked.sayuk.repl.co/playlist",

          { name: newPlaylist, videos: [] },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        playlistDispatch({ type: "CREATE_PLAYLIST", payload: response.data });
        toast("New Playlist Created", {
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
};

export function axiosRemovePlaylist(playlist, playlistDispatch, auth, toast) {
  if (auth) {
    (async function () {
      try {
        const response = await axios.delete(
          `https://Vid-Lib-API-Forked.sayuk.repl.co/playlist/${playlist._id}`,
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );

        playlistDispatch({ type: "SET_PLAYLIST", payload: response.data });
        toast("Playlist Removed", {
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

export function axiosAddVideoToPlaylist(
  playlist,
  video,
  playlistDispatch,
  auth,
  toast
) {
  if (auth) {
    (async function () {
      try {
        const response = await axios.post(
          `https://Vid-Lib-API-Forked.sayuk.repl.co/playlist/update/${playlist._id}`,
          {
            video: video,
          },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );
        console.log(video, playlist._id);
        // playlistDispatch({ type: "SET_PLAYLIST", payload: response.data });
        toast("Video Added to Playlist", {
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

export function axiosDeleteVideoFromPlaylist(playlist, video, auth) {
  if (auth) {
    (async function () {
      try {
        const response = await axios.delete(
          "https://Vid-Lib-API-Forked.sayuk.repl.co/playlist/delete",
          {
            playlistId: playlist,
            videoId: video,
          },
          {
            headers: {
              "auth-token": auth.token,
            },
          }
        );
        toast("Video Delete from Playlist", {
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
