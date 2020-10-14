import React from 'react';
import playerList from '../data/playerList';
import { Link } from 'react-router-dom';


export class PlayerListView extends React.Component {
   constructor() {
      super();
   }

   render() {
      return (
         <table>
            <thead>
               <tr>
                  <td>Name</td>
                  <td>From</td>
                  <td>To</td>
               </tr>
            </thead>
            <tbody>
               {
                  playerList.map(
                     (player) => (
                        <tr className="player-name" key={player.player_id}>
                           <td>
                              <Link to={`/players/${player.player_id}`}>{player.name}</Link>
                           </td>
                        </tr>
                     ))}
            </tbody>
         </table>
      )
   }
}