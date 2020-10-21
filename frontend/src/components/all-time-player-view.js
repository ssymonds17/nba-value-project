import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Need new SCSS file

export class AllTimePlayerView extends React.Component {
 constructor() {
  super();
  this.state = {
   playerList: [{}],
  };
 }

 componentDidMount() {
  this.getPlayerList();
 }

 getPlayerList = () => {
  axios.get(`https://nba-value-reference.herokuapp.com/rankings/players`)
   .then((response) => {
    this.setState({
     playerList: response.data
    });
   })
   .catch(() => {
    console.log('data has not been received');
   })
 }

 render() {
  const { playerList } = this.state;

  return (
   <div>
    <h1>All Time Player Value Ranking</h1>
    <table>
     <thead>
      <tr>
       <th>Rank</th>
       <th>Name</th>
       <th>Career Value</th>
       <th>Career Total</th>
       <th>Peak Average</th>
       <th>Year From</th>
       <th>Year To</th>
      </tr>
     </thead>
     <tbody>
      {
       playerList.map(player => (
        <tr className="player-name" key={player._id}>
         <td>
          {player.rank}
         </td>
         <Link to={`/players/${player.player_id}`}>
          <td>
           {player.name}
          </td>
         </Link>
         <td>{Number(player.career_value).toFixed(2)}</td>
         <td>{Number(player.career_total).toFixed(2)}</td>
         <td>{Number(player.peak_avg).toFixed(2)}</td>
         <td>{player.year_from}</td>
         <td>{player.year_to}</td>
        </tr>
       ))}
     </tbody>
    </table>
   </div>
  );
 }
}