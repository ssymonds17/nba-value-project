import React from 'react';
import { HomeView } from './home-view';
import { PlayerListView } from './player-list-view';
import { PlayerView } from './player-view';
import { TeamListView } from './team-list-view';
import { TeamView } from './team-view';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

export default class MainView extends React.Component {
  render() {
    return (
      <Router>
        <Container className="main-view">
          <Route exact path="/" render={() => <HomeView />} />
          <Route exact path="/players" render={() => <PlayerListView />} />
          <Route exact path="/players/:playerID" render={() => <PlayerView />} />
          <Route exact path="/teams" render={() => <TeamListView />} />
          <Route exact path="/teams/:teamAbb/:year" render={() => <TeamView />} />
        </Container>
      </Router>
    );
  }
}