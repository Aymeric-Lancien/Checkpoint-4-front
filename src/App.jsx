import './App.css';
import PlayerCard from './components/Card/PlayerCard';
import Header from './components/Header/Header';
import WelcomeText from './components/WelcomeText/WelcomeText';

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomeText />
      <PlayerCard />
    </div>
  );
}

export default App;
