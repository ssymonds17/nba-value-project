import React from 'react';
import franchiseList from '../data/franchiseList';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import '../styles/components/index.scss';
import '../styles/components/tables.scss';

export class TeamListView extends React.Component {

   getDefunct = () => {
      const defunctFranchises = [];
      franchiseList.forEach(function (element, index) {
         if (element['active'] === 'no') {
            defunctFranchises.push(element);
         }
      });
      return defunctFranchises;
   }

   getActive = () => {
      const activeFranchises = [];
      franchiseList.forEach(function (element, index) {
         if (element['active'] === 'yes') {
            activeFranchises.push(element);
         }
      });
      return activeFranchises;
   }

   render() {
      let defunctFranchises = this.getDefunct();
      let activeFranchises = this.getActive();

      return (
         <div className="franchise-list-container">
            <div className="active-franchises table-container">
               <h2>Active Franchises</h2>
               <Table bordered responsive>
                  <thead>
                     <tr className="team-list-header">
                        <th>Team Name</th>
                        <th>League</th>
                        <th>From</th>
                        <th>Until</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        activeFranchises.map(
                           (team) => (
                              <tr className="team-list-body" key={team.abbreviation}>
                                 <td><Link to={`/teams/${team.abbreviation}`}>{team.team_full_name}</Link></td>
                                 <td>{team.league}</td>
                                 <td>{team.first_year}</td>
                                 <td>{team.last_year}</td>
                              </tr>
                           ))}
                  </tbody>
               </Table>
            </div>
            <div className="defunct-franchises table-container">
               <h2>Defunct Franchises</h2>
               <Table bordered responsive>
                  <thead>
                     <tr className="team-list-header">
                        <th>Team Name</th>
                        <th>League</th>
                        <th>From</th>
                        <th>Until</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        defunctFranchises.map(
                           (team) => (
                              <tr className="team-list-body" key={team.abbreviation}>
                                 <td><Link to={`/teams/${team.abbreviation}`}>{team.team_full_name}</Link></td>
                                 <td>{team.league}</td>
                                 <td>{team.first_year}</td>
                                 <td>{team.last_year}</td>
                              </tr>
                           ))}
                  </tbody>
               </Table>
            </div>
         </div>
      )
   }
}