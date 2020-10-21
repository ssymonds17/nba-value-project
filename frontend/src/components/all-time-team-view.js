import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Need new SCSS file

export class AllTimeTeamView extends React.Component {
  constructor() {
    super();
    this.state = {
      teamList: [{}],
    };
  }

  componentDidMount() {
    this.getTeamList();
  }

  getTeamList = () => {
    axios.get(`https://nba-value-reference.herokuapp.com/rankings/teams`)
      .then((response) => {
        this.setState({
          teamList: response.data
        });
      })
      .catch(() => {
        console.log('data has not been received');
      })
  }

  render() {
    const { teamList } = this.state;

    return (
      <div>
        <h1>All Time Team Value Ranking</h1>
        <table>
          <thead>
            <tr>
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
            {
              teamList.map(team => (
                <tr className="all-time-team-data" key={team._id}>
                  <td>{team.rank}</td>
                  <Link to={`/teams/${team.franchise_code}/${team.year}`}>
                    <td>{team.team}</td>
                  </Link>
                  <td>{team.year}</td>
                  <td>{Number(team.overall).toFixed(2)}</td>
                  <td>{Number(team.regular_season).toFixed(2)}</td>
                  <td>{Number(team.playoffs).toFixed(2)}</td>
                  <td>{team.record}</td>
                  <td>{team.result}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}