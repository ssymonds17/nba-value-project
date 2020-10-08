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
        response.data.sort((a, b) => a.year - b.year);
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
    player.forEach(season => {
      seasonValueArray.push(season.total_season_value);
    })
    return seasonValueArray.reduce((a, b) => a + b, 0).toFixed(2);
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
              player.map(season => (
                <tr className="player-name" key={season._id}>
                  <td>{season.year}</td>
                  <td>{season.league}</td>
                  <td>{Number(season.total_season_value).toFixed(2)}</td>
                  <td>{season.position}</td>
                  <td>{season.age}</td>
                  <td>{season.team_one}</td>
                  <td>{season.team_two}</td>
                  <td>{season.team_three}</td>
                  <td>{Number(season.regularseason__score).toFixed(2)}</td>
                  <td>{Number(season.regularseason__win_shares).toFixed(1)}</td>
                  <td>{Number(season.regularseason__win_shares_48).toFixed(3)}</td>
                  <td>{Number(season.regularseason__vorp).toFixed(1)}</td>
                  <td>{Number(season.regularseason__bpm).toFixed(1)}</td>
                  <td>{season.regularseason__games}</td>
                  <td>{Number(season.regularseason__mpg).toFixed(1)}</td>
                  <td>{season.playoff__score ? Number(season.playoff__score).toFixed(2) : ''}</td>
                  <td>{season.playoff__win_shares ? Number(season.playoff__win_shares).toFixed(1) : ''}</td>
                  <td>{season.playoff__win_shares_48 ? Number(season.playoff__win_shares_48).toFixed(3) : ''}</td>
                  <td>{season.playoff__vorp ? Number(season.playoff__vorp).toFixed(1) : ''}</td>
                  <td>{season.playoff__bpm ? Number(season.playoff__bpm).toFixed(1) : ''}</td>
                  <td>{season.playoff__games ? player.playoff__games : ''}</td>
                  <td>{season.playoff__mpg ? Number(season.playoff__mpg).toFixed(1) : ''}</td>
                  <td>{season.team_record}</td>
                  <td>{season.team_result}</td>
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

// export default App;
