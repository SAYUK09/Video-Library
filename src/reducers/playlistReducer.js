export function playlistReducer(playlistRedcState, action) {
  switch (action.type) {
    case "SET_PLAYLIST":
      console.log(playlistRedcState.playlist);
      return { ...playlistRedcState, playlist: action.payload };

    case "CREATE_PLAYLIST":
      return {
        ...playlistRedcState,
        playlist: [...playlistRedcState.playlist, action.payload]
      };

    default:
      break;
  }
}
