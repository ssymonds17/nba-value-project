import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../styles/components/tables.scss';
import '../styles/components/buttons.scss';
import '../styles/components/index.scss';
import '../styles/components/season-view.scss';

export class RegularSeasonView extends React.Component {
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
        <div className="season-view-header-container">
          <h1>{season[0].league} {season[0].year} Regular Season Statistics</h1>
          <div className="season-view-btn-container">
            <div className="change-btn-container">
              <Link to={`/seasons/regular/${season[0].league}/${season[0].year - 1}`}><Button className="custom-btn season-btn" style={this.setPreviousSeasonButtonStyle()}>{`<<`} {season[0].year - 1} Season</Button></Link>
              <Link to={`/seasons/regular/${season[0].league}/${season[0].year + 1}`}><Button className="custom-btn season-btn" style={this.setNextSeasonButtonStyle()}>{season[0].year + 1} Season {`>>`}</Button></Link>
            </div>
            <div className="change-btn-container">
              <Link to={`/seasons/overall/${season[0].league}/${season[0].year}`}><Button className="custom-btn season-btn">Overall</Button></Link>
              <Link to={`/seasons/playoffs/${season[0].league}/${season[0].year}`}><Button className="custom-btn season-btn">Playoffs</Button></Link>
            </div>
          </div>
        </div>
        <div className="season-rsp table-container">
          <Table bordered responsive>
            <thead>
              <tr className="first-row">
                <th>Rank</th>
                <th>Name</th>
                <th>Value</th>
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
                    <td className="score-column">{Number(season.score).toFixed(2)}</td>
                    <td>{season.position}</td>
                    <td>{season.age}</td>
                    <td>
                      {
                        season.team_abbreviation === 'TOT'
                          ? season.team_abbreviation :
                          <Link to={`/teams/${season.team_abbreviation}/${season.year}`}>{season.team_abbreviation}</Link>
                      }
                    </td>
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
          </Table>
        </div>
      </div>
    );
  }
}