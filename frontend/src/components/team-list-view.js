import React from 'react';
import franchiseList from '../data/franchiseList';
import { Link } from 'react-router-dom';


export class TeamListView extends React.Component {

   render() {
      return (
         <table>
            <thead>
               <tr className="team-list-header">
                  <td>Team Name</td>
                  <td>League</td>
                  <td>From</td>
                  <td>Until</td>
               </tr>
            </thead>
            <tbody>
               {
                  franchiseList.map(
                     (team) => (
                        <tr className="team-list-body" key={team.abbreviation}>
                           <td><Link to={`/teams/${team.abbreviation}`}>{team.team_full_name}</Link></td>
                           <td>{team.league}</td>
                           <td>{team.first_year}</td>
                           <td>{team.last_year}</td>
                           {
                              team.active === "no" ?
                                 <td>Defunct</td> : ''
                           }
                        </tr>
                     ))}
            </tbody>
         </table>
      )
   }
}