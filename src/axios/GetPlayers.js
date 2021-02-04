import axios from 'axios';

const GetPlayers = ({ setPlayers }) => {

  axios
    .get(`http://localhost:8080/`)
    .then((res) => {
      setPlayers(res.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export default GetPlayers;