import { AiTwotoneInfoCircle } from "react-icons/ai";

export function vidLibReducer(vidRedcState, action) {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...vidRedcState, videos: action.payload };
      break;

    case "SET_LIKED_VIDEOS":
      return { ...vidRedcState, likedVideos: action.payload };

    case "SET_WATCH_LATER":
      return { ...vidRedcState, watchLater: action.payload };
      break;

    case "ADD_TO_LIKED_VIDEOS":
      return {
        ...vidRedcState,
        likedVideos: [...vidRedcState.likedVideos, action.payload]
      };

    case "REMOVE_FROM_LIKED_VIDEOS":
      return {
        ...vidRedcState,
        likedVideos: vidRedcState.likedVideos.filter(
          (item) => item._id !== action.payload._id
        )
      };
      break;

    case "ADD_TO_WATCH_LATER":
      console.log("addd");
      return {
        ...vidRedcState,
        watchLater: [...vidRedcState.watchLater, action.payload]
      };
      break;

    case "REMOVE_FROM_WATCH_LATER":
      return {
        ...vidRedcState,
        watchLater: vidRedcState.watchLater.filter(
          (item) => item._id !== action.payload._id
        )
      };

    default:
      break;
  }
}
