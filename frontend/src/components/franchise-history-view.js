import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';

export class FranchiseHistoryView extends React.Component {
  constructor() {
    super();
    this.state = {
      franchise: [{}]
    };
  }

  componentDidMount() {
    let path = window.location.pathname;
    let franchiseCode = path.slice(7);
    this.getFranchiseHistory(franchiseCode);
  }

  getFranchiseHistory = (franchiseCode) => {
    axios.get(`https://nba-value-reference.herokuapp.com/teams/${franchiseCode}`)
      .then((response) => {
        this.setState({
          franchise: response.data
        });
      })
      .catch(() => {
        console.log('data has not been received');
      })
  }

  render() {
    const { franchise } = this.state;

    return (
      <div>
        <h1>{franchise[0].team_full_name} Franchise Index</h1>
        <div className="franchise-history table-container">
          <Table responsive bordered>
            <thead>
              <tr className="first-row">
                <th>Year</th>
                <th>League</th>
                <th>Team</th>
                <th>Team Record</th>
                <th>Team Result</th>
              </tr>
            </thead>
            <tbody>
              {
                franchise.map(season => (
                  <tr key={season._id}>
                    <td><Link to={`/teams/${season.franchise_code}/${season.year}`}>{season.year}</Link></td>
                    <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.league}</Link></td>
                    <td><Link to={`/teams/${season.franchise_code}/${season.year}`}>{season.team_full_name}</Link></td>
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