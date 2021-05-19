import { AiTwotoneInfoCircle } from "react-icons/ai";

export function vidLibReducer(vidRedcState, action) {
  switch (action.type) {
    case "SET_VIDEOS":
      console.log(vidRedcState.videos, "lalal");
      return { ...vidRedcState, videos: action.payload };
      break;

    case "ADD_TO_LIKED_VIDEOS":
    
      return {
        ...vidRedcState,
        likedVideos: [...vidRedcState.likedVideos, action.payload]
      };
    case "REMOVE_FROM_LIKED_VIDEOS":
      return {...vidRedcState, likedVideos:vidRedcState.likedVideos.filter(item=> item._id != action.payload._id)}
    default:
      break;
  }
}
