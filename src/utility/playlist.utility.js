import axios from "axios";

export const axiosAddNewPlaylist = (newPlaylist, playlistDispatch) => {
  (async function () {
    try {
      const response = await axios.post(
        "https://Vid-Lib-API-Forked.sayuk.repl.co/playlist",

        { name: newPlaylist, videos: [] }
      );

      playlistDispatch({ type: "CREATE_PLAYLIST", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  })();
};

export function axiosRemovePlaylist(playlist, playlistDispatch) {
  (async function () {
    try {
      const response = await axios.delete(
        `https://Vid-Lib-API-Forked.sayuk.repl.co/playlist/${playlist._id}`
      );

      playlistDispatch({ type: "SET_PLAYLIST", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  })();
}

export function axiosAddVideoToPlaylist(playlist, video, playlistDispatch) {
  (async function () {
    try {
      const response = await axios.post(
        `https://Vid-Lib-API-Forked.sayuk.repl.co/playlist/update/${playlist._id}`,
        {
          video: video,
        }
      );
    } catch (err) {
      console.log(err);
    }
  })();
}

export function axiosDeleteVideoFromPlaylist(playlist, video) {
  (async function () {
    try {
      const response = await axios.delete(
        "https://Vid-Lib-API-Forked.sayuk.repl.co/playlist/delete",
        {
          playlistId: "60aa2bc1e9b21501dd28e0f9",
          videoId: "60a36cb508c6be01521306e3",
        }
      );
    } catch (err) {
      console.log(err);
    }
  })();
}
