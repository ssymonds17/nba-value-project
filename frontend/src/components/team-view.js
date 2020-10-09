import React from 'react';
import axios from 'axios';
// Need new SCSS file

export class TeamView extends React.Component {
 constructor() {
  super();
  this.state = {
   team: [{}],
  };
 }

 componentDidMount() {
  let teamID = window.location.pathname;
  this.getTeamData(teamID);
 }

 getTeamData = (teamID) => {
  axios.get(`https://nba-value-reference.herokuapp.com${teamID}`)
   .then((response) => {
    // response.data.sort((a, b) => a.year - b.year);
    this.setState({
     team: response.data
    });
   })
   //need to error/fail properly
   .catch(() => {
    console.log('data has not been received');
   })
 }

 // getCareerValueTotal = (team) => {
 //  let seasonValueArray = [];
 //  team.forEach(season => {
 //   seasonValueArray.push(season.regularSeason__score, season.playoff__score);
 //  })
 //  return seasonValueArray.reduce((a, b) => a + b, 0).toFixed(2);
 // }

 render() {
  const { team } = this.state;
  // let totalCareerValue = this.getCareerValueTotal(team);

  return (
   <div>
    <h1>{team[0].team_full_name}</h1>
    <h1>{team[0].year}</h1>
    <h3>{team[0].team_record}</h3>
    <h3>{team[0].team_result}</h3>
    {/* <h3>Seasons Value Total: {totalCareerValue}</h3> */}
    <table>
     <thead>
      <tr>
       <th colSpan="8"></th>
       <th colSpan="7">Regular Season</th>
       <th colSpan="7">Playoffs</th>
      </tr>
      <tr>
       <th>Lg</th>
       <th>Season Value</th>
       <th>Pos</th>
       <th>Age</th>
       <th>Tm</th>
       <th>Score</th>
       <th>WS</th>
       <th>WS/48</th>
       <th>VORP</th>
       <th>BPM</th>
       <th>G</th>
       <th>MPG</th>
       <th>Score</th>
       <th>WS</th>
       <th>WS/48</th>
       <th>VORP</th>
       <th>BPM</th>
       <th>G</th>
       <th>MPG</th>
      </tr>
     </thead>
     <tbody>
      {
       team.map(season => (
        <tr className="player-name" key={season._id}>
         <td>{season.year}</td>
         <td>{season.league}</td>
         {/* <td>{Number((season.regularSeason__score + season.playoff__score)).toFixed(2)}</td> */}
         <td>{season.position}</td>
         <td>{season.age}</td>
         <td>{season.team_abbreviation}</td>
         <td>{Number(season.regularSeason__score).toFixed(2)}</td>
         <td>{Number(season.regularSeason__win_shares).toFixed(1)}</td>
         <td>{Number(season.regularSeason__win_shares_48).toFixed(3)}</td>
         <td>{Number(season.regularSeason__vorp).toFixed(1)}</td>
         <td>{Number(season.regularSeason__bpm).toFixed(1)}</td>
         <td>{season.regularSeason__games}</td>
         <td>{Number(season.regularSeason__mpg).toFixed(1)}</td>
         <td>{season.playoff__score ? Number(season.playoff__score).toFixed(2) : Number(0).toFixed(2)}</td>
         <td>{season.playoff__win_shares ? Number(season.playoff__win_shares).toFixed(1) : Number(0).toFixed(1)}</td>
         <td>{season.playoff__win_shares_48 ? Number(season.playoff__win_shares_48).toFixed(3) : Number(0).toFixed(3)}</td>
         <td>{season.playoff__vorp ? Number(season.playoff__vorp).toFixed(1) : Number(0).toFixed(1)}</td>
         <td>{season.playoff__bpm ? Number(season.playoff__bpm).toFixed(1) : Number(0).toFixed(1)}</td>
         <td>{season.playoff__games ? season.playoff__games : Number(0)}</td>
         <td>{season.playoff__mpg ? Number(season.playoff__mpg).toFixed(1) : Number(0).toFixed(1)}</td>
         <td>{season.team_record}</td>
         <td>{season.team_result}</td>
        </tr>
       ))}
     </tbody>
     <tfoot>
      <tr>
       <td colSpan="2">Total</td>
       {/* <td>{totalCareerValue}</td> */}
      </tr>
     </tfoot>
    </table>
   </div>
  );
 }
}