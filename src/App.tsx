import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import LoginForm from './components/LoginForm';
import BuildingForm from './components/BuildingForm';
import BuildingSearch from './components/BuildingSearch';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <SideMenu />
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route path="/register" component={BuildingForm} />
          <Route path="/search" component={BuildingSearch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;