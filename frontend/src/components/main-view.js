import React from 'react';
import { PlayerView } from './player-view';
import { TeamView } from './team-view';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

export default class MainView extends React.Component {
  render() {
    return (
      <Router>
        <Container className="main-view">
          <Route path="/players/:playerID" render={() => <PlayerView />} />
          <Route path="/teams/:teamAbb/:year" render={() => <TeamView />} />
        </Container>
      </Router>
    );
  }
}