import React from 'react';
import seasonIndex from '../data/seasonIndex';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import '../styles/components/tables.scss';
import '../styles/components/index.scss';

export class SeasonListView extends React.Component {

  render() {
    return (
      <div className="season-list-container">
        <h1>Seasons Index</h1>
        <div className="seasons-list table-container">
          <Table bordered responsive>
            <thead>
              <tr>
                <th>Year</th>
                <th>League</th>
                <th>Champions</th>
                <th>Runners Up</th>
                <th>Overall MVP</th>
                <th>Regular Season MVP</th>
                <th>Playoffs MVP</th>
              </tr>
            </thead>
            <tbody>
              {
                seasonIndex.map(
                  (season) => (
                    <tr key={season.league + season.year}>
                      <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.year}</Link></td>
                      <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.league}</Link></td>
                      <td><Link to={`/teams/${season.champions_franchise_code}/${season.year}`}>{season.champions}</Link></td>
                      <td><Link to={`/teams/${season.runners_up_franchise_code}/${season.year}`}>{season.runners_up}</Link></td>
                      <td><Link to={`/players/${season.overall_mvp_player_id}`}>{season.overall_mvp}</Link> ({season.overall_mvp_score})</td>
                      <td><Link to={`/players/${season.rs_mvp_player_id}`}>{season.rs_mvp}</Link> ({season.rs_mvp_score})</td>
                      <td><Link to={`/players/${season.playoffs_mvp_player_id}`}>{season.playoffs_mvp}</Link> ({season.playoffs_mvp_score})</td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}