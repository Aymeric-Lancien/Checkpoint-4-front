import React, { useEffect, useState } from 'react';
import GetPlayers from '../../axios/GetPlayers';
import PlayerCard from '../Card/PlayerCard';
import style from './PlayerCardList.module.css';


const PlayerCardList = () => {

  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    GetPlayers({ setPlayers });
  }, []);

  return (
    <div className={style.player}>
    {players.map((player) => (
      <PlayerCard player={player} key={player.idguitar_players} />
    ))}
    </div>
  );
};

export default PlayerCardList;