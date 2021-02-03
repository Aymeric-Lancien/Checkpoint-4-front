import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 200,
    minHeight: 450,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    padding: 0,
    paddingBottom: 30,
  },
  wrapper: {
    width: 300,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
}));

export const PlayerCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <CardMedia
          classes={mediaStyles}
          image={
            'https://upload.wikimedia.org/wikipedia/commons/d/de/Provinssirock_20130615_-_Children_of_Bodom_-_54.jpg'
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoTitle>Alexi Laiho</InfoTitle>
          </Info>
        </Box>
      </Card>
    </div>
  );
});
export default PlayerCard