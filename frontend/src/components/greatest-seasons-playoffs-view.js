import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Need new SCSS file

export class GreatestSeasonsPlayoffsView extends React.Component {
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
    axios.get(`https://nba-value-reference.herokuapp.com/rankings/seasons/playoffs`)
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
    let rank = 0;

    return (
      <div>
        <h1>Greatest Playoff Seasons All Time</h1>
        <Link to={`/rankings/seasons/overall`}><button>Greatest Seasons Overall</button></Link>
        <Link to={`/rankings/seasons/regularseason`}><button>Greatest Regular Seasons</button></Link>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Year</th>
              <th>Lg</th>
              <th>Season Value</th>
              <th>Pos</th>
              <th>Age</th>
              <th>Tm</th>
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
                  <td>{rank += 1}</td>
                  <td><Link to={`/players/${season.player_id}`}>{season.name}</Link></td>
                  <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.year}</Link></td>
                  <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.league}</Link></td>
                  <td>{season.playoff__score ? Number(season.playoff__score).toFixed(2) : Number(0).toFixed(2)}</td>
                  <td>{season.position}</td>
                  <td>{season.age}</td>
                  <td><Link to={`/teams/${season.team_one}/${season.year}`}>{season.team_one}</Link></td>
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