import React from 'react';
import seasonIndex from '../data/seasonIndex';
import { Link } from 'react-router-dom';


export class SeasonListView extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Year</td>
            <td>League</td>
            <td>Champions</td>
            <td>Runners Up</td>
            <td>Overall MVP</td>
            <td>Regular Season MVP</td>
            <td>Playoffs MVP</td>
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
      </table>
    )
  }
}