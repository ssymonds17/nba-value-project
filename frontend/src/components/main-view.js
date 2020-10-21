import React from 'react';
import { HomeView } from './home-view';
import { PlayerListView } from './player-list-view';
import { PlayerListByCharView } from './player-list-by-char-view';
import { PlayerView } from './player-view';
import { TeamListView } from './team-list-view';
import { TeamView } from './team-view';
import { AllTimePlayerView } from './all-time-player-view';
import { AllTimeTeamView } from './all-time-team-view';
import { GreatestSeasonsOverallView } from './greatest-seasons-overall-view';
import { GreatestSeasonsRSView } from './greatest-seasons-regularseason-view';
import { GreatestSeasonsPlayoffsView } from './greatest-seasons-playoffs-view';
import { OverallSeasonView } from './overall-season-view';
import { RegularSeasonView } from './regular-season-view';
import { PlayoffSeasonView } from './playoff-season-view';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

export default class MainView extends React.Component {
  render() {
    return (
      <Router>
        <Container className="main-view">
          <Route exact path="/" render={() => <HomeView />} />
          <Route exact path="/players" render={() => <PlayerListView />} />
          <Route exact path="/playerlist/:char" render={() => <PlayerListByCharView />} />
          <Route exact path="/players/:playerID" render={() => <PlayerView />} />
          <Route exact path="/teams" render={() => <TeamListView />} />
          <Route exact path="/teams/:teamAbb/:year" render={() => <TeamView />} />
          <Route exact path="/rankings/players" render={() => <AllTimePlayerView />} />
          <Route exact path="/rankings/teams" render={() => <AllTimeTeamView />} />
          <Route exact path="/rankings/seasons/overall" render={() => <GreatestSeasonsOverallView />} />
          <Route exact path="/rankings/seasons/regularseason" render={() => <GreatestSeasonsRSView />} />
          <Route exact path="/rankings/seasons/playoffs" render={() => <GreatestSeasonsPlayoffsView />} />
          <Route exact path="/seasons/overall/:league/:year" render={() => <OverallSeasonView />} />
          <Route exact path="/seasons/regular/:league/:year" render={() => <RegularSeasonView />} />
          <Route exact path="/seasons/playoffs/:league/:year" render={() => <PlayoffSeasonView />} />
        </Container>
      </Router>
    );
  }
}