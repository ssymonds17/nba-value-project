import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Need new SCSS file

export class OverallSeasonView extends React.Component {
  constructor() {
    super();
    this.state = {
      season: [{}],
    };
  }

  componentDidMount() {
    let seasonID = window.location.pathname;
    this.props = seasonID;
    this.getSeasonData(seasonID);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let seasonID = window.location.pathname;
      this.getSeasonData(seasonID);
    }
  }

  getSeasonData = (seasonID) => {
    axios.get(`https://nba-value-reference.herokuapp.com${seasonID}`)
      .then((response) => {
        this.setState({
          season: response.data
        });
      })
      .catch(() => {
        console.log('data has not been received');
      })
  }

  setPreviousSeasonButtonStyle() {
    let styles = {}
    if (this.state.season[0].year === 1947 && this.state.season[0].league === 'NBA') {
      const firstStyle = {
        display: 'none'
      }
      styles = Object.assign(styles, firstStyle)
    }
    if (this.state.season[0].year === 1968 && this.state.season[0].league === 'ABA') {
      const secondStyle = {
        display: 'none'
      }
      styles = Object.assign(styles, secondStyle)
    }
    return styles
  }

  setNextSeasonButtonStyle() {
    let styles = {}
    if (this.state.season[0].year === 2020 && this.state.season[0].league === 'NBA') {
      const firstStyle = {
        display: 'none'
      }
      styles = Object.assign(styles, firstStyle)
    }
    if (this.state.season[0].year === 1976 && this.state.season[0].league === 'ABA') {
      const secondStyle = {
        display: 'none'
      }
      styles = Object.assign(styles, secondStyle)
    }
    return styles
  }

  render() {
    const { season } = this.state;

    return (
      <div>
        <h1>{season[0].league} {season[0].year} Overall</h1>
        <div>
          <Link to={`/seasons/regular/${season[0].league}/${season[0].year}`}><button>Regular Season</button></Link>
          <Link to={`/seasons/playoffs/${season[0].league}/${season[0].year}`}><button>Playoffs</button></Link>
        </div>
        {/* LINK BELOW DOES NOT RELOAD PAGE WIP */}
        <div>
          <Link to={`/seasons/overall/${season[0].league}/${season[0].year - 1}`}><button style={this.setPreviousSeasonButtonStyle()}>Previous Season</button></Link>
          <Link to={`/seasons/overall/${season[0].league}/${season[0].year + 1}`}><button style={this.setNextSeasonButtonStyle()}>Next Season</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th colSpan="8"></th>
              <th colSpan="7">Regular Season</th>
              <th colSpan="7">Playoffs</th>
            </tr>
            <tr>
              <th>Name</th>
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
              season.map(season => (
                <tr key={season._id}>
                  <td><Link to={`/players/${season.player_id}`}>{season.name}</Link></td>
                  <td>{Number(season.total_season_value).toFixed(2)}</td>
                  <td>{season.position}</td>
                  <td>{season.age}</td>
                  <td><Link to={`/teams/${season.team_one}/${season.year}`}>{season.team_one}</Link></td>
                  <td><Link to={`/teams/${season.team_two}/${season.year}`}>{season.team_two}</Link></td>
                  <td><Link to={`/teams/${season.team_three}/${season.year}`}>{season.team_three}</Link></td>
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