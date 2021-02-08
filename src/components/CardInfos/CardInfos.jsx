import React, { useEffect, useState } from "react";
import GetInfos from "../../axios/GetInfos";
import PostNewTrack from '../../axios/PostNewTrack';
import Infos from "../../views/Infos";


const CardInfos = (props) => {
  const id = props.match.params.id;
  const [infos, setInfos] = useState([{}]);
  const [input, setInput] = useState("");

  useEffect(() => {
    GetInfos(id, setInfos);
  }, [id]);

  const HandleInput = (e) => {
    setInput(e.target.value);
  }

  const HandleNewTrack = () => {
    if(input) {
      PostNewTrack(input, id);
      window.location.reload();
    }
  }


  return (
    <div>
      <Infos infos={infos} HandleInput={HandleInput} HandleNewTrack={HandleNewTrack}  key={infos[0].player_name} />
    </div>
  );
};

export default CardInfos;
