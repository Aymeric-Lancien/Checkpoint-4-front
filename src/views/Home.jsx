import React from 'react';
import PlayerCardList from '../components/CardList/PlayerCardList';
import Header from '../components/Header/Header';
import WelcomeText from '../components/WelcomeText/WelcomeText';

const Home = () => {
  return (
    <div>
      <Header />
      <WelcomeText />
      <PlayerCardList />
    </div>
  );
};

export default Home;