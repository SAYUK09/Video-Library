import axios from "axios";

export const axiosAddNewPlaylist = (newPlaylist, playlistDispatch) => {
  (async function () {
    try {
      const response = await axios.post(
        "https://Vid-Lib-Backend.sayuk.repl.co/playlist",

        { name: newPlaylist, videos: [] }
      );
      console.log(newPlaylist);
      console.log(response.data);
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
        `https://Vid-Lib-Backend.sayuk.repl.co/playlist/${playlist._id}`
      );

      playlistDispatch({ type: "SET_PLAYLIST", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  })();
}


export function addVideoToPlaylist(playlist, video, playlistDispatch){
    
  (async function(){

    try{
      const response = await axios.post(`https://Vid-Lib-Backend.sayuk.repl.co/playlist/update/${playlist._id}`,{
      video:{video}
    })

    console.log(response.data)
    }catch(err){
      console.log(err)
    }

  })()
  
  
}