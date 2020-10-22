import React from 'react';
import axios from 'axios';
// Need new SCSS file

export class TeamView extends React.Component {
  constructor() {
    super();
    this.state = {
      team: [{}],
      // franchiseCode: ''
    };
  }

  componentDidMount() {
    let path = window.location.pathname;
    let teamID = path.slice(7, 10);
    let year = path.slice(11);
    this.getTeamData(teamID, year);
  }

  getFranchiseCode = (teamID) => {
    axios.get(`https://nba-value-reference.herokuapp.com/franchise/${teamID}`)
      .then((response) => {
        var franchiseCode = response.data[0].franchise_code;
        return franchiseCode;
      })
      .catch(() => {
        console.log('data has been received');
      })
  }

  getTeamData = (teamID, year) => {
    this.getFranchiseCode(teamID);
    axios.get(`https://nba-value-reference.herokuapp.com/teams/${franchiseCode}/${year}`)
      .then((response) => {
        this.setState({
          team: response.data
        });
      })
      .catch(() => {
        console.log('data has not been received');
      })
  }

  getCareerValueTotal = (team) => {
    let seasonValueArray = [];
    team.forEach(season => {
      seasonValueArray.push(season.regularSeason__score, season.playoff__score);
    })
    return seasonValueArray.reduce((a, b) => a + b, 0).toFixed(2);
  }

  getRegularSeasonTotal = (team) => {
    let seasonValueArray2 = [];
    team.forEach(season => {
      seasonValueArray2.push(season.regularSeason__score);
    })
    return seasonValueArray2.reduce((a, b) => a + b, 0).toFixed(2);
  }

  getPlayoffTotal = (team) => {
    let seasonValueArray3 = [];
    team.forEach(season => {
      seasonValueArray3.push(season.playoff__score);
    })
    return seasonValueArray3.reduce((a, b) => a + b, 0).toFixed(2);
  }

  render() {
    const { team } = this.state;
    let totalCareerValue = this.getCareerValueTotal(team);
    let totalRegularSeasonValue = this.getRegularSeasonTotal(team);
    let totalPlayoffValue = this.getPlayoffTotal(team);


    return (
      <div>
        <h1>{team[0].team_full_name}</h1>
        <h1>{team[0].year}</h1>
        <h3>{team[0].team_record}</h3>
        <h3>{team[0].team_result}</h3>
        <h3>Season Score: {totalCareerValue}</h3>
        <h3>RS Score: {totalRegularSeasonValue}</h3>
        <h3>Playoffs Score: {totalPlayoffValue}</h3>
        <table>
          <thead>
            <tr>
              <th colSpan="5"></th>
              <th colSpan="7">Regular Season</th>
              <th colSpan="7">Playoffs</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Lg</th>
              <th>Value</th>
              <th>Pos</th>
              <th>Age</th>
              <th>Score</th>
              <th>G</th>
              <th>MPG</th>
              <th>WS/48</th>
              <th>WS</th>
              <th>BPM</th>
              <th>VORP</th>
              <th>Score</th>
              <th>G</th>
              <th>MPG</th>
              <th>WS/48</th>
              <th>WS</th>
              <th>BPM</th>
              <th>VORP</th>
            </tr>
          </thead>
          <tbody>
            {
              team.map(season => (
                <tr key={season._id}>
                  <td>{season.name}</td>
                  <td>{season.league}</td>
                  <td>{Number((season.regularSeason__score + season.playoff__score)).toFixed(2)}</td>
                  <td>{season.position}</td>
                  <td>{season.age}</td>
                  <td>{Number(season.regularSeason__score).toFixed(2)}</td>
                  <td>{season.regularSeason__games}</td>
                  <td>{Number(season.regularSeason__mpg).toFixed(1)}</td>
                  <td>{Number(season.regularSeason__win_shares_48).toFixed(3)}</td>
                  <td>{Number(season.regularSeason__win_shares).toFixed(1)}</td>
                  <td>{Number(season.regularSeason__bpm).toFixed(1)}</td>
                  <td>{Number(season.regularSeason__vorp).toFixed(1)}</td>
                  <td>{season.playoff__score ? Number(season.playoff__score).toFixed(2) : Number(0).toFixed(2)}</td>
                  <td>{season.playoff__games ? season.playoff__games : Number(0)}</td>
                  <td>{season.playoff__mpg ? Number(season.playoff__mpg).toFixed(1) : Number(0).toFixed(1)}</td>
                  <td>{season.playoff__win_shares_48 ? Number(season.playoff__win_shares_48).toFixed(3) : Number(0).toFixed(3)}</td>
                  <td>{season.playoff__win_shares ? Number(season.playoff__win_shares).toFixed(1) : Number(0).toFixed(1)}</td>
                  <td>{season.playoff__bpm ? Number(season.playoff__bpm).toFixed(1) : Number(0).toFixed(1)}</td>
                  <td>{season.playoff__vorp ? Number(season.playoff__vorp).toFixed(1) : Number(0).toFixed(1)}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>{totalCareerValue}</td>
              <td colSpan="2">Regular Season: </td>
              <td>{totalRegularSeasonValue}</td>
              <td colSpan="2">Playoffs: </td>
              <td>{totalPlayoffValue}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}