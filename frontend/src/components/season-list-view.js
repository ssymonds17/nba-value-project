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
            <td>MVP Value</td>
            <td>RS MVP</td>
            <td>RS Score</td>
            <td>Playoffs MVP</td>
            <td>Playoffs Score</td>
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
                  <td>{season.overall_mvp}</td>
                  <td>{season.overall_mvp_score}</td>
                  <td>{season.rs_mvp}</td>
                  <td>{season.rs_mvp_score}</td>
                  <td>{season.playoffs_mvp}</td>
                  <td>{season.playoffs_mvp_score}</td>
                </tr>
              ))}
        </tbody>
      </table>
    )
  }
}