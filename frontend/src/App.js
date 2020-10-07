import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
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
      .catch(() => {
        console.log('data has not been received');
      })
  }

  getCareerValueTotal = (player) => {
    let seasonValueArray = [];
    let i = 0;
    for (i = 0; i < player.length; i++) {
      seasonValueArray.push(player[i].total_season_value);
    }
    return seasonValueArray.reduce((a, b) => a + b, 0);
  }

  render() {
    const { player } = this.state;
    console.log(player);
    this.getCareerValueTotal(player);

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
              player.map(player => (
                <tr className="player-name" key={player._id}>
                  <td>{player.year}</td>
                  <td>{player.league}</td>
                  <td>{player.total_season_value}</td>
                  <td>{player.position}</td>
                  <td>{player.age}</td>
                  <td>{player.team_one}</td>
                  <td>{player.team_two}</td>
                  <td>{player.team_three}</td>
                  <td>{player.regularseason__score}</td>
                  <td>{player.regularseason__win_shares}</td>
                  <td>{player.regularseason__win_shares_48}</td>
                  <td>{player.regularseason__vorp}</td>
                  <td>{player.regularseason__bpm}</td>
                  <td>{player.regularseason__games}</td>
                  <td>{player.regularseason__mpg}</td>
                  <td>{player.playoff__score}</td>
                  <td>{player.playoff__win_shares}</td>
                  <td>{player.playoff__win_shares_48}</td>
                  <td>{player.playoff__vorp}</td>
                  <td>{player.playoff__bpm}</td>
                  <td>{player.playoff__games}</td>
                  <td>{player.playoff__mpg}</td>
                  <td>{player.team_record}</td>
                  <td>{player.team_result}</td>
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

export default App;