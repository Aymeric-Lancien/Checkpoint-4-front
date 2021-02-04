import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardInfos from './components/CardInfos/CardInfos';
// 
// 
import Home from './views/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/infos/:id" component={CardInfos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
