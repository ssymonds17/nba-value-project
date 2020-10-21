import React from 'react';
import axios from 'axios';
// Need new SCSS file

export class GreatestSeasonsOverallView extends React.Component {
  constructor() {
    super();
    this.state = {
      seasonList: [{}],
    };
  }

  componentDidMount() {
    this.getSeasonList();
  }

  getSeasonList = () => {
    axios.get(`https://nba-value-reference.herokuapp.com/rankings/seasons/overall`)
      .then((response) => {
        this.setState({
          seasonList: response.data
        });
      })
      .catch(() => {
        console.log('data has not been received');
      })
  }

  render() {
    const { seasonList } = this.state;

    return (
      <div>
        <h1>Greatest Seasons All Time</h1>
        <small>Combination of both regular season and playoffs</small>
        <table>
          <thead>
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
              seasonList.map(season => (
                <tr key={season._id}>
                  <td>{season.year}</td>
                  <td>{season.league}</td>
                  <td>{Number(season.total_season_value).toFixed(2)}</td>
                  <td>{season.position}</td>
                  <td>{season.age}</td>
                  <td>{season.team_one}</td>
                  <td>{season.team_two}</td>
                  <td>{season.team_three}</td>
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
        </table>
      </div>
    );
  }
}