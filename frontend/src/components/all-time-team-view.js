import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "../styles/components/tables.scss";
import "../styles/components/index.scss";

export class AllTimeTeamView extends React.Component {
  constructor() {
    super();
    this.state = {
      teamList: [{}]
    };
  }

  componentDidMount() {
    this.getTeamList();
  }

  getTeamList = () => {
    axios
      .get(`https://nba-value-reference.herokuapp.com/v0/rankings/teams`)
      .then(response => {
        this.setState({
          teamList: response.data
        });
      })
      .catch(() => {
        console.log("data has not been received");
      });
  };

  render() {
    const { teamList } = this.state;

    return (
      <div>
        <h1>Greatest Teams All Time</h1>
        <div className="greatest-teams table-container">
          <Table responsive bordered>
            <thead>
              <tr className="first-row">
                <th>Rank</th>
                <th>Team</th>
                <th>Year</th>
                <th>Overall</th>
                <th>Regular Season</th>
                <th>Playoffs</th>
                <th>Record</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {teamList.map(team => (
                <tr className="all-time-team-data" key={team._id}>
                  <td>{team.rank}</td>
                  <td>
                    <Link to={`/teams/${team.franchise_code}/${team.year}`}>
                      {team.team}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/seasons/overall/NBA/${team.year}`}>
                      {team.year}
                    </Link>
                  </td>
                  <td className="score-column">
                    {Number(team.overall).toFixed(2)}
                  </td>
                  <td>{Number(team.regular_season).toFixed(2)}</td>
                  <td>{Number(team.playoffs).toFixed(2)}</td>
                  <td>{team.record}</td>
                  <td>{team.result}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
