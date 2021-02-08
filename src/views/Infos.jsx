import React from "react";
import style from "./Infos.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    margin: "0 0.5rem",
    marginTop: "0.5rem",
  },
  plus: {
    height: "1.5rem",
  },
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minHeight: 450,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
    },
  },
  wrapper: {
    width: 300,
    marginTop: 5,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
}));

const Infos = (props) => {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();
  const { infos, HandleInput, HandleNewTrack } = props;
  return (
    <div>
      <div className={classes.root}>
        <Link to='/'>
          <Button variant='contained'>Revenir à la liste</Button>
        </Link>
      </div>
      <div className={classes.wrapper}>
        <Card className={classes.card}>
          <CardMedia classes={mediaStyles} image={infos[0].picture} />
        </Card>
      </div>
      <div>
        <p>{`Nom de scène : ${infos[0].player_name}`}</p>
        <p>{`Marque de guitare : ${infos[0].guitar_brand}`}</p>
        <p>{`Groupe : ${infos[0].band_name}`}</p>
        <p className={style.description}>{infos[0].description}</p>
      </div>
      <div className={style.tracklist}>
        <div>
          <input className={style.input} type='text' onChange={HandleInput} />
          <Button
            className={classes.plus}
            variant='contained'
            onClick={HandleNewTrack}
          >
            Ajouter la musique
          </Button>
        </div>
        <p>Liste des musiques:</p>
        {infos.map((item) => (
          <p key={item.idmorceaux}>{`- ${item.track_name}`}</p>
        ))}
      </div>
    </div>
  );
};

export default Infos;
