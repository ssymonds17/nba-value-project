import React from 'react';
import axios from 'axios';
// import playerList from '../data/playerList';
import '../styles/components/player-list-view.scss';
import { Link } from 'react-router-dom';


export class PlayerListView extends React.Component {
   constructor() {
      super();
      this.state = {
         playerList: [{}],
      };
   }

   getPlayerList = () => {
      axios.get(`https://nba-value-reference.herokuapp.com/players`)
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
      const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
      const playerList = this.state;

      return (
         <div className="player-list-wrapper">
            <div className="alphabet-container">
               <div className="alphabet-list">
                  <tr>
                     {
                        alphabet.map(
                           (char) => (
                              <td className="alphabet-character">
                                 <Link to={`/players/list/${char}`}>{char}</Link>
                              </td>
                           )
                        )
                     }
                  </tr>
               </div>
            </div>
            <table className="player-list-table">
               <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>From</th>
                  <th>To</th>
               </tr>
               {
                  playerList.map(
                     (player) => (
                        <tr className="player-list" key={player.player_id}>
                           <td className="player-list-first-name">
                              <Link to={`/players/${player.player_id}`}>{player.first_name}</Link>
                           </td>
                           <td className="player-list-last-name">
                              <Link to={`/players/${player.player_id}`}>{player.last_name}</Link>
                           </td>
                           <td>
                              TBD
                           </td>
                           <td>
                              TBD
                           </td>
                        </tr>
                     ))}
            </table >
         </div>
      )
   }
}