import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './App'; // Your main app component
import Rooms from './Rooms'; // Import the Rooms component

function Main() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/rooms" component={Rooms} />
      </Switch>
    </Router>
  );
}

export default Main;
