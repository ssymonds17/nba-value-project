import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
    <h1>{franchise[0].team_full_name}</h1>
    <table>
     <thead>
      <tr>
       <th>Year</th>
       <th>Lg</th>
       <th>Team</th>
       <th>Tm Record</th>
       <th>Tm Result</th>
      </tr>
     </thead>
     <tbody>
      {
       franchise.map(season => (
        <tr key={season._id}>
         <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.year}</Link></td>
         <td><Link to={`/seasons/overall/${season.league}/${season.year}`}>{season.league}</Link></td>
         <td>{season.team_full_name}</td>
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