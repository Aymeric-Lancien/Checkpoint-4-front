import axios from 'axios';

const GetInfos = (id, setInfos) => {

  axios
    .get(`http://localhost:8080/infos/${id}`)
    .then((res) => {
      setInfos(res.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export default GetInfos;