import axios from "axios";

export const axiosAddNewPlaylist = (newPlaylist, playlistDispatch, auth) => {
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
    } catch (error) {
      console.log(error);
    }
  })();
};

export function axiosRemovePlaylist(playlist, playlistDispatch, auth) {
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
    } catch (error) {
      console.log(error);
    }
  })();
}

export function axiosAddVideoToPlaylist(
  playlist,
  video,
  playlistDispatch,
  auth
) {
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
    } catch (err) {
      console.log(err);
    }
  })();
}

export function axiosDeleteVideoFromPlaylist(playlist, video, auth) {
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
    } catch (err) {
      console.log(err);
    }
  })();
}
