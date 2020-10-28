import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Need new SCSS file

export class PlayoffSeasonView extends React.Component {
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
    let rank = 0;

    return (
      <div>
        <h1>{season[0].league} {season[0].year} Playoffs</h1>
        <div>
          <Link to={`/seasons/overall/${season[0].league}/${season[0].year}`}><button>Overall</button></Link>
          <Link to={`/seasons/regular/${season[0].league}/${season[0].year}`}><button>Regular Season</button></Link>
        </div>
        <div>
          <Link to={`/seasons/playoffs/${season[0].league}/${season[0].year - 1}`}><button style={this.setPreviousSeasonButtonStyle()}>Previous Season</button></Link>
          <Link to={`/seasons/playoffs/${season[0].league}/${season[0].year + 1}`}><button style={this.setNextSeasonButtonStyle()}>Next Season</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
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
              season.map(season => (
                <tr key={season._id}>
                  <td>{rank += 1}</td>
                  <td><Link to={`/players/${season.player_id}`}>{season.name}</Link></td>
                  <td>{Number(season.score).toFixed(2)}</td>
                  <td>{season.position}</td>
                  <td>{season.age}</td>
                  <td><Link to={`/teams/${season.team_abbreviation}/${season.year}`}>{season.team_abbreviation}</Link></td>
                  <td>{season.games}</td>
                  <td>{Number(season.mpg).toFixed(1)}</td>
                  <td>{Number(season.win_shares_48).toFixed(3)}</td>
                  <td>{Number(season.win_shares).toFixed(1)}</td>
                  <td>{Number(season.bpm).toFixed(1)}</td>
                  <td>{Number(season.vorp).toFixed(1)}</td>
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