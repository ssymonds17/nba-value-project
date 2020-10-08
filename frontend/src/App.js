import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: [{}],
    };
  }

  componentDidMount() {
    let playerID = window.location.pathname;
    this.getPlayerData(playerID);
  }

  getPlayerData = (playerID) => {
    axios.get(`https://nba-value-reference.herokuapp.com${playerID}`)
      .then((response) => {
        this.setState({
          player: response.data
        });
      })
      //need to error/fail properly
      .catch(() => {
        console.log('data has not been received');
      })
  }

  getCareerValueTotal = (player) => {
    let seasonValueArray = [];
    //let i = 0; Don't need this can assign in in the loop

    //could also use a foreach loop which would be quicker for an array
    // player.forEach(year => {
    //   seasonValueArray.push(year.total_season_value)
    //   console.log(seasonValueArray);
    // });
    // return seasonValueArray.reduce((a, b) => a + b, 0);
    for(let i = 0; i < player.length; i++) {
       seasonValueArray.push(player[i].total_season_value);
      }
    return seasonValueArray.reduce((a, b) => a + b, 0);
  }

  render() {
    const { player } = this.state;
    //let yearsOrdered; there is very shit commented code that orders the years but shows all every row
    //this.getCareerValueTotal(player);
    return (
      <div>
        <h1>{player[0].name}</h1>
        <table>
          <thead>
            <tr>
              <th colSpan="8"></th>
              <th colSpan="7">Regular Season</th>
              <th colSpan="7">Playoffs</th>
            </tr>
            <tr>
              <th>Year</th>
              <th>Lg</th>
              <th>Season Value</th>
              <th>Pos</th>
              <th>Age</th>
              <th>Tm 1</th>
              <th>Tm 2</th>
              <th>Tm 3</th>
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
              <th>Tm Record</th>
              <th>Tm Result</th>
            </tr>
          </thead>
          <tbody>
            {
              //thing year is a better name rather than player
              
              player.map(year => (
                //yearsOrdered = player.map(year => ([year.year])),
                //yearsOrdered.sort((a,b) => a-b),
                <tr className="player-name" key={year._id}>
                  <td>{yearsOrdered}</td>
                  <td>{year.league}</td>
                  <td>{year.total_season_value}</td>
                  <td>{year.position}</td>
                  <td>{year.age}</td>
                  <td>{year.team_one}</td>
                  <td>{year.team_two}</td>
                  <td>{year.team_three}</td>
                  <td>{year.regularseason__score}</td>
                  <td>{year.regularseason__win_shares}</td>
                  <td>{year.regularseason__win_shares_48}</td>
                  <td>{year.regularseason__vorp}</td>
                  <td>{year.regularseason__bpm}</td>
                  <td>{year.regularseason__games}</td>
                  <td>{year.regularseason__mpg}</td>
                  <td>{year.playoff__score}</td>
                  <td>{year.playoff__win_shares}</td>
                  <td>{year.playoff__win_shares_48}</td>
                  <td>{year.playoff__vorp}</td>
                  <td>{year.playoff__bpm}</td>
                  <td>{year.playoff__games}</td>
                  <td>{year.playoff__mpg}</td>
                  <td>{year.team_record}</td>
                  <td>{year.team_result}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>{this.getCareerValueTotal(player)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn how to React
//         </a>
//       </header>
//     </div>
//   );
// }
