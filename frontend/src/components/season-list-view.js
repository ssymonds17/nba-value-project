import React from 'react';
import seasonIndex from '../data/seasonIndex';
import { Link } from 'react-router-dom';


export class SeasonListView extends React.Component {
  constructor() {
    super();
  }

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
                  <td>
                    <Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.year}</Link>
                  </td>
                  <td>{season.league}</td>
                  <td>{season.champions}</td>
                  <td>{season.runners_up}</td>
                  <td>{season.overall_mvp} ({season.overall_mvp_score})</td>
                  <td>{season.rs_mvp} ({season.rs_mvp_score})</td>
                  <td>{season.playoffs_mvp} ({season.playoffs_mvp_score})</td>
                </tr>
              ))}
        </tbody>
      </table>
    )
  }
}