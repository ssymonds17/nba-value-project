import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Need new SCSS file

export class PlayerView extends React.Component {
  constructor() {
    super();
    this.state = {
      player: [{}],
    };
  }

  componentDidMount() {
    let playerID = window.location.pathname;
    this.getPlayerData(playerID);
  }

  getPlayerData = (playerID) => {
    axios.get(`https://nba-value-reference.herokuapp.com${playerID}`)
      .then((response) => {
        response.data.sort((a, b) => a.year - b.year);
        this.setState({
          player: response.data
        });
      })
      .catch(() => {
        console.log('data has not been received');
      })
  }

  getCareerValueTotal = (player) => {
    let seasonValueArray = [];
    player.forEach(season => {
      seasonValueArray.push(season.total_season_value);
    })
    return seasonValueArray.reduce((a, b) => a + b, 0).toFixed(2);
  }

  getCareerPeakValue = (player) => {
    let seasonValueArray2 = [];
    player.forEach(season => {
      seasonValueArray2.push(season.total_season_value);
    })
    seasonValueArray2.sort(function (a, b) {
      return b - a;
    })
    return (seasonValueArray2.slice(0, 7).reduce((a, b) => a + b, 0) / 7).toFixed(2);
  }

  getPeakMultiplier = (careerPeakValue) => {
    let multiplier1 = (1 + (careerPeakValue / 100) - 0.1);
    let peakValue2 = multiplier1 * careerPeakValue;
    return (1 + (peakValue2 / 100) - 0.1).toFixed(3);
  }

  getAllTimeValue = (totalCareerValue, peakMultiplier) => {
    return (totalCareerValue * peakMultiplier).toFixed(2);
  }

  render() {
    const { player } = this.state;
    let totalCareerValue = this.getCareerValueTotal(player);
    let careerPeakValue = this.getCareerPeakValue(player);
    let peakMultiplier = this.getPeakMultiplier(careerPeakValue);
    let allTimeValue = this.getAllTimeValue(totalCareerValue, peakMultiplier);

    return (
      <div>
        <h1>{player[0].name}</h1>
        <h3>All Time Value: {allTimeValue}</h3>
        <h3>Peak Value: {careerPeakValue}</h3>
        <h3>Seasons Value Total: {totalCareerValue}</h3>
        <table>
          <thead>
            <tr>
              <th colSpan="8"></th>
              <th colSpan="7">Regular Season</th>
              <th colSpan="7">Playoffs</th>
            </tr>
            <tr>
              <th>Year</th>
              <th>Lg</th>
              <th>Season Value</th>
              <th>Pos</th>
              <th>Age</th>
              <th>Tm 1</th>
              <th>Tm 2</th>
              <th>Tm 3</th>
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
              <th>Tm Record</th>
              <th>Tm Result</th>
            </tr>
          </thead>
          <tbody>
            {
              player.map(season => (
                <tr className="player-name" key={season._id}>
                  <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.year}</Link></td>
                  <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.league}</Link></td>
                  <td>{Number(season.total_season_value).toFixed(2)}</td>
                  <td>{season.position}</td>
                  <td>{season.age}</td>
                  <td><Link to={`/teams/${season.team_one}/${season.year}`}>{season.team_one}</Link></td>
                  <td><Link to={`/teams/${season.team_two}/${season.year}`}>{season.team_two}</Link></td>
                  <td>
                    {
                      season.team_three === '2TM' || season.team_three === '3TM'
                        ? season.team_three :
                        <Link to={`/teams/${season.team_three}/${season.year}`}>{season.team_three}</Link>
                    }
                  </td>
                  <td>{Number(season.regularseason__score).toFixed(2)}</td>
                  <td>{season.regularseason__games}</td>
                  <td>{Number(season.regularseason__mpg).toFixed(1)}</td>
                  <td>{Number(season.regularseason__win_shares_48).toFixed(3)}</td>
                  <td>{Number(season.regularseason__win_shares).toFixed(1)}</td>
                  <td>{Number(season.regularseason__bpm).toFixed(1)}</td>
                  <td>{Number(season.regularseason__vorp).toFixed(1)}</td>
                  <td>{season.playoff__score ? Number(season.playoff__score).toFixed(2) : Number(0).toFixed(2)}</td>
                  <td>{season.playoff__games ? season.playoff__games : Number(0)}</td>
                  <td>{season.playoff__mpg ? Number(season.playoff__mpg).toFixed(1) : Number(0).toFixed(1)}</td>
                  <td>{season.playoff__win_shares_48 ? Number(season.playoff__win_shares_48).toFixed(3) : Number(0).toFixed(3)}</td>
                  <td>{season.playoff__win_shares ? Number(season.playoff__win_shares).toFixed(1) : Number(0).toFixed(1)}</td>
                  <td>{season.playoff__bpm ? Number(season.playoff__bpm).toFixed(1) : Number(0).toFixed(1)}</td>
                  <td>{season.playoff__vorp ? Number(season.playoff__vorp).toFixed(1) : Number(0).toFixed(1)}</td>
                  <td>{season.team_record}</td>
                  <td>{season.team_result}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>{totalCareerValue}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}