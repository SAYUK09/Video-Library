export function vidLibReducer(vidRedcState, action) {
  switch (action.type) {
    case "SET_VIDEOS":
      console.log(vidRedcState.videos, "lalal");
      return { ...vidRedcState, videos: action.payload };
      break;

    default:
      break;
  }
}
