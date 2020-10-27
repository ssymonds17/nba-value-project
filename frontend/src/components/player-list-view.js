import React from 'react';
import axios from 'axios';
import '../styles/components/player-list-view.scss';
import { Link } from 'react-router-dom';

export class PlayerListView extends React.Component {
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
      const { playerList } = this.state;

      return (
         <div className="player-list-wrapper">
            <div className="alphabet-container">
               <div className="alphabet-list">
                  <ul>
                     {
                        alphabet.map(
                           (char) => (
                              <li className="alphabet-character" key={char}>
                                 <Link to={`/playerlist/${char.toLowerCase()}`}>{char}</Link>
                              </li>
                           )
                        )
                     }
                  </ul>
               </div>
            </div>
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
                                 {player.first_year}
                              </td>
                              <td>
                                 {player.last_year}
                              </td>
                           </tr>
                        ))}
               </tbody>
            </table >
         </div>
      )
   }
}