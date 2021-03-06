import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../styles/components/index.scss";
import "../styles/components/tables.scss";
import "../styles/components/buttons.scss";
import "../styles/components/team-view.scss";

export class TeamView extends React.Component {
  constructor() {
    super();
    this.state = {
      team: [{}],
      franchise: [{}],
      franchiseCode: ""
    };
  }

  componentDidMount() {
    let path = window.location.pathname;
    let teamID = path.slice(7, 10);
    let year = path.slice(11);
    this.props = path;
    this.getFranchiseCode(teamID, year);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let path = window.location.pathname;
      let teamID = path.slice(7, 10);
      let year = path.slice(11);
      this.getFranchiseCode(teamID, year);
    }
  }

  getFranchiseCode = (teamID, year) => {
    axios
      .get(`https://nba-value-reference.herokuapp.com/v0/franchise/${teamID}`)
      .then(response => {
        this.setState(
          {
            franchise: response.data,
            franchiseCode: response.data[0].franchise_code
          },
          () => this.getTeamData(this.state.franchiseCode, year)
        );
      })
      .catch(() => {
        console.log("data has been received");
      });
  };

  getTeamData = (franchiseCode, year) => {
    axios
      .get(
        `https://nba-value-reference.herokuapp.com/v0/teams/${franchiseCode}/${year}`
      )
      .then(response => {
        this.setState({
          team: response.data
        });
      })
      .catch(() => {
        console.log("data has not been received");
      });
  };

  getCareerValueTotal = team => {
    let seasonValueArray = [];
    team.forEach(season => {
      seasonValueArray.push(season.regularSeason__score, season.playoff__score);
    });
    return seasonValueArray.reduce((a, b) => a + b, 0).toFixed(2);
  };

  getRegularSeasonTotal = team => {
    let seasonValueArray2 = [];
    team.forEach(season => {
      seasonValueArray2.push(season.regularSeason__score);
    });
    return seasonValueArray2.reduce((a, b) => a + b, 0).toFixed(2);
  };

  getPlayoffTotal = team => {
    let seasonValueArray3 = [];
    team.forEach(season => {
      seasonValueArray3.push(season.playoff__score);
    });
    return seasonValueArray3.reduce((a, b) => a + b, 0).toFixed(2);
  };

  setPreviousSeasonButtonStyle() {
    let styles = {};
    if (this.state.franchise[0].first_year === this.state.team[0].year) {
      const firstStyle = {
        display: "none"
      };
      styles = Object.assign(styles, firstStyle);
    }
    if (
      this.state.franchise[0].franchise_code === "CHO" &&
      this.state.team[0].year === 2005
    ) {
      const secondStyle = {
        display: "none"
      };
      styles = Object.assign(styles, secondStyle);
    }
    return styles;
  }

  setNextSeasonButtonStyle() {
    let styles = {};
    if (this.state.franchise[0].last_year === this.state.team[0].year) {
      const firstStyle = {
        display: "none"
      };
      styles = Object.assign(styles, firstStyle);
    }
    if (
      this.state.franchise[0].franchise_code === "CHO" &&
      this.state.team[0].year === 2002
    ) {
      const secondStyle = {
        display: "none"
      };
      styles = Object.assign(styles, secondStyle);
    }
    return styles;
  }

  render() {
    const { team } = this.state;
    let totalCareerValue = this.getCareerValueTotal(team);
    let totalRegularSeasonValue = this.getRegularSeasonTotal(team);
    let totalPlayoffValue = this.getPlayoffTotal(team);

    return (
      <div>
        <div className="team-header-container">
          <div className="team-value-header">
            <h1>
              {team[0].year} {team[0].team_full_name}
            </h1>
            <div>
              <h3>
                {team[0].team_result} ({team[0].team_record})
              </h3>
            </div>
          </div>
          <div className="team-btn-container">
            <div className="season-change-btn-container">
              <Link
                to={`/teams/${team[0].team_abbreviation}/${team[0].year - 1}`}
              >
                <Button
                  className="custom-btn"
                  style={this.setPreviousSeasonButtonStyle()}
                >
                  {`<<`} {team[0].year - 1} Season
                </Button>
              </Link>
              <Link
                to={`/teams/${team[0].team_abbreviation}/${team[0].year + 1}`}
              >
                <Button
                  className="custom-btn"
                  style={this.setNextSeasonButtonStyle()}
                >
                  {team[0].year + 1} Season {`>>`}
                </Button>
              </Link>
            </div>
            <div className="index-btn-container">
              <Link to={`/teams/${team[0].franchise_code}`}>
                <Button className="custom-btn btn-lg">
                  {team[0].team_full_name} Franchise Index
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="team-table table-container">
          <Table responsive bordered>
            <thead>
              <tr className="first-row">
                <th colSpan="5"></th>
                <th colSpan="7">Regular Season</th>
                <th colSpan="7">Playoffs</th>
              </tr>
              <tr className="second-row">
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
              {team.map(season => (
                <tr key={season._id}>
                  <td>
                    <Link to={`/players/${season.player_id}`}>
                      {season.name}
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/seasons/overall/${season.league}/${season.year}`}
                    >
                      {season.league}
                    </Link>
                  </td>
                  <td className="score-column">
                    {Number(
                      season.regularSeason__score + season.playoff__score
                    ).toFixed(2)}
                  </td>
                  <td>{season.position}</td>
                  <td>{season.age}</td>
                  <td className="score-column">
                    {Number(season.regularSeason__score).toFixed(2)}
                  </td>
                  <td>{season.regularSeason__games}</td>
                  <td>{Number(season.regularSeason__mpg).toFixed(1)}</td>
                  <td>
                    {Number(season.regularSeason__win_shares_48).toFixed(3)}
                  </td>
                  <td>{Number(season.regularSeason__win_shares).toFixed(1)}</td>
                  <td>{Number(season.regularSeason__bpm).toFixed(1)}</td>
                  <td>{Number(season.regularSeason__vorp).toFixed(1)}</td>
                  <td className="score-column">
                    {season.playoff__score
                      ? Number(season.playoff__score).toFixed(2)
                      : Number(0).toFixed(2)}
                  </td>
                  <td>
                    {season.playoff__games ? season.playoff__games : Number(0)}
                  </td>
                  <td>
                    {season.playoff__mpg
                      ? Number(season.playoff__mpg).toFixed(1)
                      : Number(0).toFixed(1)}
                  </td>
                  <td>
                    {season.playoff__win_shares_48
                      ? Number(season.playoff__win_shares_48).toFixed(3)
                      : Number(0).toFixed(3)}
                  </td>
                  <td>
                    {season.playoff__win_shares
                      ? Number(season.playoff__win_shares).toFixed(1)
                      : Number(0).toFixed(1)}
                  </td>
                  <td>
                    {season.playoff__bpm
                      ? Number(season.playoff__bpm).toFixed(1)
                      : Number(0).toFixed(1)}
                  </td>
                  <td>
                    {season.playoff__vorp
                      ? Number(season.playoff__vorp).toFixed(1)
                      : Number(0).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td className="empty-row" colSpan="1"></td>
                <td className="score-column">{totalCareerValue}</td>
                <td className="empty-row" colSpan="2"></td>
                <td className="score-column">{totalRegularSeasonValue}</td>
                <td className="empty-row" colSpan="6"></td>
                <td className="score-column">{totalPlayoffValue}</td>
                <td className="empty-row" colSpan="6"></td>
              </tr>
            </tfoot>
          </Table>
        </div>
      </div>
    );
  }
}
