import React from 'react';
import axios from 'axios';
import '../styles/components/player-list-view.scss';
import { Link } from 'react-router-dom';


export class PlayerListByCharView extends React.Component {
 constructor() {
  super();
  this.state = {
   playerList: [{}],
  };
 }

 componentDidMount() {
  let char = window.location.pathname;
  this.getPlayerList(char);
 }

 getPlayerList = (char) => {
  axios.get(`https://nba-value-reference.herokuapp.com${char}`)
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
   <div className="player-list-wrapper">
    <button>
     <Link to={`/players`}>Back to player search</Link>
    </button>
    <table className="player-list-table">
     <tbody>
      <tr>
       <th>Name</th>
       <th>From</th>
       <th>To</th>
      </tr>
      {
       playerList.map(
        (player) => (
         <tr className="player-list" key={player.player_id}>
          <td className="player-list-first-name">
           <Link to={`/players/${player.player_id}`}>{player.name}</Link>
          </td>
          <td>
           TBD
           </td>
          <td>
           TBD
          </td>
         </tr>
        ))}
     </tbody>
    </table >
   </div>
  )
 }
}