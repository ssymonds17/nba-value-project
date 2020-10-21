import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// Need new SCSS file

export class RegularSeasonView extends React.Component {
 constructor() {
  super();
  this.state = {
   season: [{}],
  };
 }

 componentDidMount() {
  let seasonID = window.location.pathname;
  this.getSeasonData(seasonID);
 }

 getSeasonData = (seasonID) => {
  axios.get(`https://nba-value-reference.herokuapp.com${seasonID}`)
   .then((response) => {
    this.setState({
     team: response.data
    });
   })
   .catch(() => {
    console.log('data has not been received');
   })
 }

 render() {
  const { season } = this.state;

  return (
   <div>
    <h1>{season[0].league} {season[0].year} Regular Season</h1>
    <table>
     <thead>
      <tr>
       <th colSpan="8"></th>
       <th colSpan="7">Regular Season</th>
       <th colSpan="7">Playoffs</th>
      </tr>
      <tr>
       <th>Name</th>
       <th>Season Value</th>
       <th>Pos</th>
       <th>Age</th>
       <th>Tm 1</th>
       <th>Tm 2</th>
       <th>Tm 3</th>
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
         <td>{season.name}</td>
         <td>{Number(season.regularseason__score).toFixed(2)}</td>
         <td>{season.position}</td>
         <td>{season.age}</td>
         <td>{season.team_one}</td>
         <td>{season.team_two}</td>
         <td>{season.team_three}</td>
         <td>{season.regularseason__games}</td>
         <td>{Number(season.regularseason__mpg).toFixed(1)}</td>
         <td>{Number(season.regularseason__win_shares_48).toFixed(3)}</td>
         <td>{Number(season.regularseason__win_shares).toFixed(1)}</td>
         <td>{Number(season.regularseason__bpm).toFixed(1)}</td>
         <td>{Number(season.regularseason__vorp).toFixed(1)}</td>
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