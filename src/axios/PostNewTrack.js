import axios from "axios";

const PostNewTrack = (track, id) => {
  axios
    .post(`http://localhost:8080/newtrack`, {
      track_name: track,
      guitar_players_idguitar_players: id,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export default PostNewTrack;
